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
}
