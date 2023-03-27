import { IChatContainerProps } from "constants/types";
import { useData } from "hooks";
import { getChatContainerStyles } from "styles/components/ChatContainerStyles";

import { FC, SyntheticEvent, useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { IoSend } from "react-icons/io5";
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
    const { currentTheme } = useData();
    const [messages, setMessages] =
        useState<{ type: EMessageTypes; message: string }[]>(dummyMessages);
    const styles = getChatContainerStyles(currentTheme, {
        isChatOpen,
        isInputFocused,
    });

    const handleUserMessage = (e: SyntheticEvent): void => {
        e?.preventDefault();
        setMessage("");
        if (message.trim() === "") return;
        setMessages([...messages, { type: EMessageTypes.USER, message }]);
        setMessage("");
    };

    return (
        <IFrame
            style={
                isChatOpen
                    ? styles.containerIframe
                    : styles.containerIframeClosed
            }
        >
            <div style={styles.chatContainerWrapper}>
                <div style={styles.header}>
                    <GiGraduateCap style={styles.headerIcon} />
                    <h1 style={styles.headerTitle}>What2Study</h1>
                </div>
                <div style={styles.chatBox}>
                    {messages.map(({ message, type }, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.messageWrapper,
                                ...(type === EMessageTypes.BOT
                                    ? styles.botMessageWrapper
                                    : styles.userMessageWrapper),
                            }}
                        >
                            {type === EMessageTypes.BOT && (
                                <RiChatSmile3Fill style={styles.botIcon} />
                            )}
                            <div
                                style={{
                                    ...styles.message,
                                    ...(type === EMessageTypes.BOT
                                        ? styles.botMessage
                                        : styles.userMessage),
                                }}
                            >
                                {message}
                            </div>
                            {type === EMessageTypes.USER && (
                                <RiUser6Fill style={styles.userIcon} />
                            )}
                        </div>
                    ))}
                </div>
                <form
                    style={styles.inputFormWrapper}
                    onSubmit={handleUserMessage}
                >
                    <input
                        style={styles.inputField}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                    />
                    <button
                        type="submit"
                        style={styles.sendButton}
                        onClick={handleUserMessage}
                    >
                        <IoSend style={styles.buttonIcon} />
                    </button>
                </form>
            </div>
        </IFrame>
    );
};

export default ChatContainer;
