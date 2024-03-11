import { EChatLanguage, EPopupItem, ERoute, IChatFilters } from "hooks";

import { EThemes } from "./themes";

export interface IUseData {
    sessionId: string;
    setSessionId: (value: string) => void;
    isChatOpen: boolean;
    setIsChatOpen: (value: boolean) => void;
    isMobileScreen: boolean;
    setIsMobileScreen: (value: boolean) => void;
    currentTheme: EThemes;
    setCurrentTheme: (theme: EThemes) => void;
    popupItem: EPopupItem;
    setPopupItem: (value: EPopupItem) => void;
    isBotVolumeOn: boolean;
    setIsBotVolumeOn: (value: boolean) => void;
    currentRoute: ERoute;
    setCurrentRoute: (value: ERoute) => void;
    chatFilters: IChatFilters;
    setChatFilters: (value: IChatFilters) => void;
    language: EChatLanguage;
    setLanguage: (value: EChatLanguage) => void;
    clientConfig: IClientConfigurations;
    isClientConfigFetched: boolean;
    saveClientConfigurations: (value: any) => Promise<void>;
}

export interface IConfigDefaultSettings {
    chatbotLanguage: string;
    audioNarration: boolean;
    narrator: string;
}

export interface IConfigChatbotBehaviour {
    formality: number;
    opinion: number;
    emotion: number;
    length: number;
    topics: number;
    tone: number;
    chatbotBehaviourName: string;
}

export interface IConfigChatbotReplies {
    randomQuestions: boolean;
    showRandomQuestionsMessage: string;
}

export interface IConfigChatbotContact {
    talkToHuman: boolean;
    showTalkToHumanMessage: string;
}

export interface IConfigChatbotLook {
    chatbotHeader: ISubConfigLookHeader;
    chatbotBackground: ISubConfigLookBackground;
    textBoxUser: ISubConfigLookUserTextBox;
    textBoxChatbotReply: ISubConfigLookBotTextBox;
    UIGroupA: ISubConfigLookUIGroupA;
    UIGroupB: ISubConfigLookUIGroupB;
    chatbotLookName: string;
}

export interface ISubConfigLookHeader {
    chatbotHeaderBackgroundColor: string;
    chatbotHeaderIconFontColor: string;
}
export interface ISubConfigLookBackground {
    chatbotBackgroundColor: string;
}
export interface ISubConfigLookUserTextBox {
    textBoxUserColor: string;
    textBoxUserFontColor: string;
    textBoxFontStyle: string;
}
export interface ISubConfigLookBotTextBox {
    textBoxChatbotReplyColor: string;
    textBoxChatbotReplyFontColor: string;
    textBoxChatboxReplyFontStyle: string;
}
export interface ISubConfigLookUIGroupA {
    UIGroupAUIBackground: string;
    UIGroupAUIHighlight: string;
}
export interface ISubConfigLookUIGroupB {
    UIGroupBUIBackground: string;
    UIGroupBUIHighlight: string;
}

export interface IClientConfigurations {
    objectId: string;
    chatbotId: string;
    userId: string;
    universityId: string;
    accessToken: string;
    chatbotName: string;
    chatbotBubbleIcons: string;
    chatbotProfileImage: string;
    defaultSettings: IConfigDefaultSettings;
    chatboxBehaviour: IConfigChatbotBehaviour;
    chatbotReplies: IConfigChatbotReplies;
    chatbotContact: IConfigChatbotContact;
    chatbotLook: IConfigChatbotLook;
}
