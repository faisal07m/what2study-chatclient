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

export interface IChatFilters {
    tone: number;
    sentiment: number;
    length: number;
    emotiveness: number;
}

export enum EChatLanguage {
    EN = "EN",
    DE = "DE",
}

export const DataProvider: FC<DataProviderProps> = (props) => {
    const { children } = props;

    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string>("");
    const [currentTheme, setCurrentTheme] = useState<EThemes>(EThemes.LIGHT_THEME_1);
    const [popupItem, setPopupItem] = useState<EPopupItem>(EPopupItem.NONE);
    const [isBotVolumeOn, setIsBotVolumeOn] = useState<boolean>(true);
    const [currentRoute, setCurrentRoute] = useState<ERoute>(ERoute.MAIN);
    const [chatFilters, setChatFilters] = useState<IChatFilters>({
        tone: 0.1,
        sentiment: 1,
        emotiveness: 0.7,
        length: 0.4,
    });
    const [language, setLanguage] = useState<EChatLanguage>(EChatLanguage.EN);

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
        currentTheme,
        setCurrentTheme,
        popupItem,
        setPopupItem,
        isBotVolumeOn,
        setIsBotVolumeOn,
        currentRoute,
        setCurrentRoute,
        chatFilters,
        setChatFilters,
        language,
        setLanguage,
    };

    // On chat client init
    useEffect(() => {
        rehydrateExistingSession();
    }, []);

    return <DataContext.Provider value={providerValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext) as IUseData;
