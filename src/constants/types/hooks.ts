import { EThemes } from "./themes";

export interface IUseData {
    sessionId: string;
    setSessionId: (value: string) => void;
    isChatOpen: boolean;
    setIsChatOpen: (value: boolean) => void;
    currentTheme: EThemes;
    setCurrentTheme: (theme: EThemes) => void;
}
