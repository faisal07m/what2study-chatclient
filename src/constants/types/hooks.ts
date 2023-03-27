import { EThemes } from "./themes";

export interface IUseData {
    isChatOpen: boolean;
    setIsChatOpen: (value: boolean) => void;
    currentTheme: EThemes;
    setCurrentTheme: (theme: EThemes) => void;
}
