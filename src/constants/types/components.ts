import { CSSProperties, ReactNode } from "react";
import { IconType } from "react-icons";

export interface IOpenChatButtonProps {
    isChatOpen: boolean;
    setIsChatOpen: (value: boolean) => void;
    icon: IconType;
}

export interface IIframeProps {
    children: ReactNode;
    style?: CSSProperties;
}

export interface IChatContainerProps {
    isChatOpen: boolean;
}
