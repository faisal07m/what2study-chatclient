import { IOpenChatButtonProps, IframeType } from "constants/types";
import { EPopupItem, useData } from "hooks";

import { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

import { IFrame } from "../utilities/IFrame";

const OpenChatButton: FC<IOpenChatButtonProps> = (props) => {
    const { icon } = props;
    const { isChatOpen, setIsChatOpen, setPopupItem, clientConfig } = useData();

    const Icon = !isChatOpen ? icon : BiChevronDown;
    const {
        chatbotBubbleIcons,
        chatbotLook: { chatbotHeader },
    } = clientConfig;

    const handleOpenChatButtonClick = () => {
        setIsChatOpen(!isChatOpen);
        setPopupItem(EPopupItem.NONE);
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
                    backgroundColor: `${chatbotHeader.chatbotHeaderBackgroundColor}`,
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
                {!isChatOpen ? (
                    <img src={chatbotBubbleIcons} alt="What2Study" style={{ width: "22px" }} />
                ) : (
                    <Icon
                        style={{
                            fontSize: "22px",
                            color: "#000000",
                        }}
                    />
                )}
            </button>
        </IFrame>
    );
};

export default OpenChatButton;
