import { LOCALSTORAGE_SESSION_ID_KEY } from "App";
import {
    EThemes,
    IClientConfigurations,
    IConfigChatbotBehaviour,
    IConfigChatbotContact,
    IConfigChatbotLook,
    IConfigChatbotReplies,
    IConfigDefaultSettings,
    ISubConfigLookBackground,
    ISubConfigLookBotTextBox,
    ISubConfigLookHeader,
    ISubConfigLookUIGroupA,
    ISubConfigLookUIGroupB,
    ISubConfigLookUserTextBox,
    IUseData,
} from "constants/types";

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
    INTRO = "INTRO",
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

const defaultClientConfig = {
    objectId: "",
    userId: "",
    universityId: "",
    chatbotName: "What 2 Study",
    chatbotBubbleIcons: "https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png",
    chatbotProfileImage: "https://openclipart.org/image/2000px/307415",
    defaultSettings: {
        chatbotLanguage: "English",
        audioNarration: true,
        narrator: "John",
    } as IConfigDefaultSettings,
    chatboxBehaviour: {
        formality: 0,
        opinion: 0,
        emotion: 0,
        length: 0,
        topics: 0,
        tone: 0,
        chatbotBehaviourName: "",
    } as IConfigChatbotBehaviour,
    chatbotReplies: {
        randomQuestions: true,
        showRandomQuestionsMessage: "",
    } as IConfigChatbotReplies,
    chatbotContact: {
        talkToHuman: true,
        showTalkToHumanMessage: "Connecting to a human...",
    } as IConfigChatbotContact,
    chatbotLook: {
        chatbotHeader: {
            chatbotHeaderBackgroundColor: "#0c8de9",
            chatbotHeaderIconFontColor: "#ffffff",
        } as ISubConfigLookHeader,
        chatbotBackground: {
            chatbotBackgroundColor: "#ffffff",
        } as ISubConfigLookBackground,
        textBoxUser: {
            textBoxUserColor: "#0c8de9",
            textBoxUserFontColor: "#ffffff",
            textBoxFontStyle: "bold",
        } as ISubConfigLookUserTextBox,
        textBoxChatbotReply: {
            textBoxChatbotReplyColor: "#e0e0e0",
            textBoxChatbotReplyFontColor: "#000000",
            textBoxChatboxReplyFontStyle: "normal",
        } as ISubConfigLookBotTextBox,
        UIGroupA: {
            UIGroupAUIBackground: "rgb(100, 100, 100)",
            UIGroupAUIHighlight: "rgb(200, 200, 200)",
        } as ISubConfigLookUIGroupA,
        UIGroupB: {
            UIGroupBUIBackground: "rgb(50, 50, 50)",
            UIGroupBUIHighlight: "rgb(150, 150, 150)",
        } as ISubConfigLookUIGroupB,
        chatbotLookName: "",
    } as IConfigChatbotLook,
} as IClientConfigurations;

const doesImageExists = async (url: string): Promise<boolean> => {
    try {
        const res = await fetch(url, {
            method: "POST",
        });
        // no image exists if response is 1xx, 4xx, 5xx
        if ([1, 4, 5].includes(Math.floor((res.status / 100) % 10))) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};

export const DataProvider: FC<DataProviderProps> = (props) => {
    const { children } = props;

    const [isChatOpen, setIsChatOpen] = useState<boolean>(false); // COMMITODO: false
    const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
    const [sessionId, setSessionId] = useState<string>("");
    const [currentTheme, setCurrentTheme] = useState<EThemes>(EThemes.LIGHT_THEME_1);
    const [popupItem, setPopupItem] = useState<EPopupItem>(EPopupItem.NONE);
    const [isBotVolumeOn, setIsBotVolumeOn] = useState<boolean>(true);
    const [currentRoute, setCurrentRoute] = useState<ERoute>(ERoute.INTRO); // COMMITODO .MAIN (TD INTRO)
    const [chatFilters, setChatFilters] = useState<IChatFilters>({
        tone: 0.1,
        sentiment: 1,
        emotiveness: 0.7,
        length: 0.4,
    });
    const [language, setLanguage] = useState<EChatLanguage>(EChatLanguage.EN);
    const [clientConfig, setClientConfig] = useState<IClientConfigurations>(); // config saved by the university in main app

    const generateNewSession = (showIntroScreen = true) => {
        const newSessionId = uuidv4();
        localStorage.setItem(LOCALSTORAGE_SESSION_ID_KEY, newSessionId);
        setSessionId(newSessionId);
        setCurrentRoute(showIntroScreen ? ERoute.INTRO : ERoute.MAIN);
    };

    const createOrRehydrateSession = async () => {
        const existingSessionId = localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)?.trim();
        if (!existingSessionId) {
            generateNewSession(true);
            return;
        }
        // TODO: validate [existingSessionId] and get previous session data from backend
        const isSessionValid = true; // data from api call
        if (isSessionValid) {
            setSessionId(existingSessionId);
            return;
        }
        generateNewSession(false);
    };

    const saveClientConfigurations = async (data: any = {}) => {
        const {
            objectId,
            chatbotId,
            userId,
            universityId,
            chatbotName,
            chatbotBubbleIcons,
            chatbotProfileImage,
            defaultSettings,
            chatboxBehaviour,
            chatbotReplies,
            chatbotContact,
            chatbotLook = {},
        } = data;

        const {
            chatbotLook: {
                chatbotHeader: dChatbotHeader,
                chatbotBackground: dChatbotBackground,
                textBoxUser: dTextBoxUser,
                textBoxChatbotReply: dTextBoxChatbotReply,
                UIGroupA: dUIGroupA,
                UIGroupB: dUIGroupB,
                chatbotLookName: dChatbotLookName,
            },
        } = defaultClientConfig; // destructure default values for easy assignment below

        const {
            chatbotHeader,
            chatbotBackground,
            textBoxUser,
            textBoxChatbotReply,
            UIGroupA,
            UIGroupB,
            chatbotLookName,
        } = chatbotLook;

        const config = {
            objectId: objectId ?? defaultClientConfig.objectId,
            chatbotId: chatbotId ?? defaultClientConfig.chatbotId,
            userId: userId ?? defaultClientConfig.userId,
            universityId: universityId ?? defaultClientConfig.universityId,
            chatbotName: chatbotName ?? defaultClientConfig.chatbotName,
            chatbotBubbleIcons:
                typeof chatbotBubbleIcons == "string"
                    ? (await doesImageExists(chatbotBubbleIcons))
                        ? chatbotBubbleIcons
                        : defaultClientConfig.chatbotBubbleIcons
                    : defaultClientConfig.chatbotBubbleIcons,
            chatbotProfileImage:
                typeof chatbotProfileImage == "string"
                    ? (await doesImageExists(chatbotProfileImage))
                        ? chatbotProfileImage
                        : defaultClientConfig.chatbotProfileImage
                    : defaultClientConfig.chatbotProfileImage,
            defaultSettings: {
                chatbotLanguage:
                    defaultSettings?.chatbotLanguage ??
                    defaultClientConfig.defaultSettings.chatbotLanguage,
                audioNarration:
                    defaultSettings?.audioNarration ??
                    defaultClientConfig.defaultSettings.audioNarration,
                narrator: defaultSettings?.narrator ?? defaultClientConfig.defaultSettings.narrator,
            } as IConfigDefaultSettings,
            chatboxBehaviour: {
                formality:
                    chatboxBehaviour?.formality ?? defaultClientConfig.chatboxBehaviour.formality,
                opinion: chatboxBehaviour?.opinion ?? defaultClientConfig.chatboxBehaviour.opinion,
                emotion: chatboxBehaviour?.emotion ?? defaultClientConfig.chatboxBehaviour.emotion,
                length: chatboxBehaviour?.length ?? defaultClientConfig.chatboxBehaviour.length,
                topics: chatboxBehaviour?.topics ?? defaultClientConfig.chatboxBehaviour.topics,
                tone: chatboxBehaviour?.tone ?? defaultClientConfig.chatboxBehaviour.tone,
                chatbotBehaviourName:
                    chatboxBehaviour?.chatbotBehaviourName ??
                    defaultClientConfig.chatboxBehaviour.chatbotBehaviourName,
            } as IConfigChatbotBehaviour,
            chatbotReplies: {
                randomQuestions:
                    chatbotReplies?.randomQuestions ??
                    defaultClientConfig.chatbotReplies.randomQuestions,
                showRandomQuestionsMessage:
                    chatbotReplies?.showRandomQuestionsMessage ??
                    defaultClientConfig.chatbotReplies.showRandomQuestionsMessage,
            } as IConfigChatbotReplies,
            chatbotContact: {
                talkToHuman:
                    chatbotContact?.talkToHuman ?? defaultClientConfig.chatbotContact.talkToHuman,
                showTalkToHumanMessage:
                    chatbotContact?.showTalkToHumanMessage ??
                    defaultClientConfig.chatbotContact.showTalkToHumanMessage,
            } as IConfigChatbotContact,
            chatbotLook: {
                chatbotHeader: {
                    chatbotHeaderBackgroundColor:
                        chatbotHeader?.chatbotHeaderBackgroundColor ??
                        dChatbotHeader.chatbotHeaderBackgroundColor,
                    chatbotHeaderIconFontColor:
                        chatbotHeader?.chatbotHeaderIconFontColor ??
                        dChatbotHeader.chatbotHeaderIconFontColor,
                } as ISubConfigLookHeader,
                chatbotBackground: {
                    chatbotBackgroundColor:
                        chatbotBackground?.chatbotBackgroundColor ??
                        dChatbotBackground?.chatbotBackgroundColor,
                } as ISubConfigLookBackground,
                textBoxUser: {
                    textBoxUserColor:
                        textBoxUser?.textBoxUserColor ?? dTextBoxUser.textBoxUserColor,
                    textBoxUserFontColor:
                        textBoxUser?.textBoxUserFontColor ?? dTextBoxUser.textBoxUserFontColor,
                    textBoxFontStyle:
                        textBoxUser?.textBoxFontStyle ?? dTextBoxUser.textBoxFontStyle,
                } as ISubConfigLookUserTextBox,
                textBoxChatbotReply: {
                    textBoxChatbotReplyColor:
                        textBoxChatbotReply?.textBoxChatbotReplyColor ??
                        dTextBoxChatbotReply.textBoxChatbotReplyColor,
                    textBoxChatbotReplyFontColor:
                        textBoxChatbotReply?.textBoxChatbotReplyFontColor ??
                        dTextBoxChatbotReply.textBoxChatbotReplyFontColor,
                    textBoxChatboxReplyFontStyle:
                        textBoxChatbotReply?.textBoxChatboxReplyFontStyle ??
                        dTextBoxChatbotReply.textBoxChatboxReplyFontStyle,
                } as ISubConfigLookBotTextBox,
                UIGroupA: {
                    UIGroupAUIBackground:
                        UIGroupA?.UIGroupAUIBackground ?? dUIGroupA.UIGroupAUIBackground,
                    UIGroupAUIHighlight:
                        UIGroupA?.UIGroupAUIHighlight ?? dUIGroupA.UIGroupAUIHighlight,
                } as ISubConfigLookUIGroupA,
                UIGroupB: {
                    UIGroupBUIBackground:
                        UIGroupB?.UIGroupBUIBackground ?? dUIGroupB.UIGroupBUIBackground,
                    UIGroupBUIHighlight:
                        UIGroupB?.UIGroupBUIHighlight ?? dUIGroupB.UIGroupBUIHighlight,
                } as ISubConfigLookUIGroupB,
                chatbotLookName: chatbotLookName ?? dChatbotLookName,
            } as IConfigChatbotLook,
        } as IClientConfigurations;

        setClientConfig(config);
    };

    const providerValue: IUseData = {
        sessionId,
        setSessionId,
        isChatOpen,
        setIsChatOpen,
        isMobileScreen,
        setIsMobileScreen,
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
        clientConfig,
        saveClientConfigurations,
    };

    // On chat client init
    useEffect(() => {
        createOrRehydrateSession();
    }, []);

    return <DataContext.Provider value={providerValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext) as IUseData;
