import { IOpenChatButtonProps, IframeType } from "constants/types";

import { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

import { IFrame } from "./IFrame";

const OpenChatButton: FC<IOpenChatButtonProps> = (props) => {
    const { isChatOpen, setIsChatOpen, icon } = props;

    const Icon = !isChatOpen ? icon : BiChevronDown;

    const handleOpenChatButtonClick = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <IFrame iframeType={IframeType.CHAT_OPEN_BUTTON}>
            <button
                // inline styles for button as loading stylesheets takes time on browser (causes to show button without styles)
                style={{
                    width: "48px",
                    height: "48px",
                    margin: "3px",
                    boxShadow: "0px 2px 3px 0px #9b9b9b",
                    backgroundColor: "#0c8de9",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    ...(isChatOpen
                        ? {
                              backgroundColor: "#f0f0f0",
                          }
                        : {}),
                }}
                onClick={handleOpenChatButtonClick}
            >
                <Icon
                    style={{
                        fontSize: "22px",
                        color: "#ffffff",
                        ...(isChatOpen ? { color: "#000000" } : {}),
                    }}
                />
            </button>
        </IFrame>
    );
};

export default OpenChatButton;
