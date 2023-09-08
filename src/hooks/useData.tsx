import { LOCALSTORAGE_SESSION_ID_KEY } from "App";
import { EThemes, IUseData } from "constants/types";

import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DataContext = createContext({});

interface DataProviderProps {
    children: ReactNode;
}

export enum EChatDifficultyLevel {
    CREATIVE = "CREATIVE",
    BALANCED = "BALANCED",
    PRECISE = "PRECISE",
}

export enum EPopupItem {
    SETTINGS = "SETTINGS",
    FILTERS = "FILTERS",
    BOT_INFO = "BOT_INFO",
    NONE = "NONE",
}

export enum ERoute {
    MAIN = "MAIN",
    TALK_TO_HUMAN = "TALK_TO_HUMAN",
}

export interface IChatSettings {
    chatDifficultyLevel: EChatDifficultyLevel;
    restoreChatOnReturn: boolean;
    conversationFallbackAnalytics: boolean;
}

export const DataProvider: FC<DataProviderProps> = (props) => {
    const { children } = props;

    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [isSettingsPageOpen, setIsSettingsPageOpen] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string>("");
    const [currentTheme, setCurrentTheme] = useState<EThemes>(EThemes.LIGHT_THEME_1);
    const [chatSettings, setChatSettings] = useState<IChatSettings>({
        chatDifficultyLevel: EChatDifficultyLevel.PRECISE,
        restoreChatOnReturn: true,
        conversationFallbackAnalytics: false,
    });
    const [popupItem, setPopupItem] = useState<EPopupItem>(EPopupItem.NONE);
    const [isBotVolumeOn, setIsBotVolumeOn] = useState<boolean>(true);
    const [currentRoute, setCurrentRoute] = useState<ERoute>(ERoute.MAIN);

    const generateNewSession = () => {
        const newSessionId = uuidv4();
        localStorage.setItem(LOCALSTORAGE_SESSION_ID_KEY, newSessionId);
        setSessionId(newSessionId);
    };

    const rehydrateExistingSession = async () => {
        const existingSessionId = localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)?.trim();
        if (!existingSessionId) {
            generateNewSession();
            return;
        }
        // TODO: validate [existingSessionId] and get previous session data from backend
        const isSessionValid = true; // data from api call
        if (isSessionValid) {
            setSessionId(existingSessionId);
            return;
        }
        generateNewSession();
    };

    const providerValue: IUseData = {
        sessionId,
        setSessionId,
        isChatOpen,
        setIsChatOpen,
        isSettingsPageOpen,
        setIsSettingsPageOpen,
        currentTheme,
        setCurrentTheme,
        chatSettings,
        setChatSettings,
        popupItem,
        setPopupItem,
        isBotVolumeOn,
        setIsBotVolumeOn,
        currentRoute,
        setCurrentRoute,
    };

    // On chat client init
    useEffect(() => {
        rehydrateExistingSession();
    }, []);

    return <DataContext.Provider value={providerValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext) as IUseData;
