import { ReactNode } from "react";
import { IconType } from "react-icons";

import { IframeType } from ".";

export interface IOpenChatButtonProps {
    isChatOpen: boolean;
    setIsChatOpen: (value: boolean) => void;
    icon: IconType;
}

export interface IIframeProps {
    children: ReactNode;
    iframeType: IframeType;
}

export interface IChatContainerProps {
    isChatOpen: boolean;
}

export interface ISettingsListProps {
    icon: IconType;
    children: ReactNode;
    settingName: string;
}
