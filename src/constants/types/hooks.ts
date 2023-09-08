import { EPopupItem, ERoute, IChatSettings } from "hooks";

import { EThemes } from "./themes";

export interface IUseData {
    sessionId: string;
    setSessionId: (value: string) => void;
    isChatOpen: boolean;
    setIsChatOpen: (value: boolean) => void;
    currentTheme: EThemes;
    setCurrentTheme: (theme: EThemes) => void;
    isSettingsPageOpen: boolean;
    setIsSettingsPageOpen: (value: boolean) => void;
    chatSettings: IChatSettings;
    setChatSettings: (value: IChatSettings) => void;
    popupItem: EPopupItem;
    setPopupItem: (value: EPopupItem) => void;
    isBotVolumeOn: boolean;
    setIsBotVolumeOn: (value: boolean) => void;
    currentRoute: ERoute;
    setCurrentRoute: (value: ERoute) => void;
}
