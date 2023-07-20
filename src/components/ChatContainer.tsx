import { IChatContainerProps, IframeType } from "constants/types";

import { FC, SyntheticEvent, useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { IoSend, IoSettingsSharp } from "react-icons/io5";
import { RiChatSmile3Fill, RiUser6Fill } from "react-icons/ri";

import { IFrame } from "./IFrame";

enum EMessageTypes {
    BOT = "BOT",
    USER = "USER",
}
const dummyMessages = [
    {
        type: EMessageTypes.BOT,
        message: "Hey! This is you what2study bot. How can I help you?",
    },
    {
        type: EMessageTypes.USER,
        message: "Hi. I'm looking for a masters course in Economics.",
    },
];

const ChatContainer: FC<IChatContainerProps> = (props) => {
    const { isChatOpen } = props;
    const [message, setMessage] = useState<string>("");
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const [messages, setMessages] =
        useState<{ type: EMessageTypes; message: string }[]>(dummyMessages);

    const handleUserMessage = (e: SyntheticEvent): void => {
        e?.preventDefault();
        setMessage("");
        if (message.trim() === "") return;
        setMessages([...messages, { type: EMessageTypes.USER, message }]);
        setMessage("");
    };

    return (
        <IFrame
            iframeType={
                isChatOpen ? IframeType.CHAT_CONTAINER_OPEN : IframeType.CHAT_CONTAINER_CLOSED
            }
        >
            <div className="chatContainerWrapper">
                <div className="header-wrapper">
                    <div className="header">
                        <GiGraduateCap className="header-icon" />
                        <h1 className="header-title">What2Study</h1>
                    </div>
                    <div className="settings-wrapper">
                        <button onClick={console.log} className="settings-button">
                            <IoSettingsSharp className="settings-icon" />
                        </button>
                    </div>
                </div>
                <div className="chatContainer">
                    {messages.map(({ message, type }, index) => (
                        <div
                            key={index}
                            className={`messageWrapper ${
                                type === EMessageTypes.BOT
                                    ? "botMessageWrapper"
                                    : "userMessageWrapper"
                            }`}
                        >
                            {type === EMessageTypes.BOT && <RiChatSmile3Fill className="botIcon" />}
                            <div
                                className={`message ${
                                    type === EMessageTypes.BOT ? "botMessage" : "userMessage"
                                }`}
                            >
                                {message}
                            </div>
                            {type === EMessageTypes.USER && <RiUser6Fill className="userIcon" />}
                        </div>
                    ))}
                </div>
                <form className="inputFormWrapper" onSubmit={handleUserMessage}>
                    <input
                        className={`inputField ${isInputFocused ? "inputFieldFocused" : ""}`}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                    />
                    <button type="submit" className="sendButton" onClick={handleUserMessage}>
                        <IoSend className="buttonIcon" />
                    </button>
                </form>
            </div>
        </IFrame>
    );
};

export default ChatContainer;
