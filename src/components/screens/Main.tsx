import { EPopupItem, ERoute, useData } from "hooks";
import IconButton from "utilities/IconButton";

import { FC, Fragment, SyntheticEvent, useEffect, useRef, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import {
    MdInfoOutline,
    MdOutlineThumbDownOffAlt,
    MdOutlineThumbUpOffAlt,
    MdOutlineWarningAmber,
    MdReplay,
    MdThumbDownAlt,
    MdThumbUpAlt,
} from "react-icons/md";
import { RiChatSmile3Fill, RiUser6Fill } from "react-icons/ri";

enum EMessageTypes {
    BOT = "BOT",
    USER = "USER",
}

interface IBotMessage {
    type: EMessageTypes;
    message: string;
    feedback?: boolean;
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

const Main: FC = () => {
    const { setPopupItem, isBotVolumeOn, setIsBotVolumeOn, setCurrentRoute } = useData();
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<IBotMessage[]>(dummyMessages);
    const [loading, setLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleUserMessage = (e: SyntheticEvent): void => {
        e?.preventDefault();
        setLoading(true);
        setMessage("");
        if (message.trim() === "") return;
        setMessages([...messages, { type: EMessageTypes.USER, message }]);
        setTimeout(() => {
            setMessages((prev) => {
                return [
                    ...prev,
                    {
                        type: EMessageTypes.BOT,
                        message: "Sure! What are your questions regarding M.Sc. Economics?",
                    },
                ];
            });
            setLoading(false);
        }, 1000);
    };

    const handleMessageFeedback = (msg: string, feedback: boolean) => {
        const messagesWithFeedback = [...messages];
        const newMessages = messagesWithFeedback.map((msgObj) =>
            msgObj.message == msg
                ? {
                      ...msgObj,
                      feedback,
                  }
                : msgObj
        );
        setMessages(newMessages);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Fragment>
            <div className="info-talktohuman">
                <IconButton
                    className="info-button"
                    icon={MdInfoOutline}
                    onClick={() => setPopupItem(EPopupItem.BOT_INFO)}
                    aria-label="Info"
                    title="Info"
                />
                <button
                    className="talk-to-human-btn"
                    onClick={() => setCurrentRoute(ERoute.TALK_TO_HUMAN)}
                >
                    Want to talk to human?
                </button>
                <IconButton
                    className="volume-button"
                    icon={isBotVolumeOn ? IoMdVolumeHigh : IoMdVolumeOff}
                    onClick={() => setIsBotVolumeOn(!isBotVolumeOn)}
                    aria-label="Volume"
                    title={isBotVolumeOn ? "Mute" : "Play"}
                />
            </div>
            <div className="chatContainer">
                {messages.map(({ message, type, feedback }, index) => (
                    <div
                        key={index}
                        className={`messageWrapper ${
                            type === EMessageTypes.BOT ? "botMessageWrapper" : "userMessageWrapper"
                        }`}
                    >
                        {type === EMessageTypes.BOT && (
                            <div className="bot-iconWrapper">
                                <RiChatSmile3Fill className="botIcon" />
                            </div>
                        )}
                        <div
                            className={`message ${
                                type === EMessageTypes.BOT ? "botMessage" : "userMessage"
                            }`}
                        >
                            {message}
                            {type === EMessageTypes.BOT && (
                                <div className="bot-msg-actions-wrapper">
                                    <button
                                        title="Report"
                                        className="action-button"
                                        onClick={console.log}
                                    >
                                        <MdOutlineWarningAmber className="action-icon" />
                                    </button>
                                    <button
                                        title="Like"
                                        className="action-button"
                                        onClick={() => {
                                            if (feedback === true) return;
                                            handleMessageFeedback(
                                                message,
                                                typeof feedback !== "undefined" ? !feedback : true
                                            );
                                        }}
                                    >
                                        {feedback === true ? (
                                            <MdThumbUpAlt className="action-icon" />
                                        ) : (
                                            <MdOutlineThumbUpOffAlt className="action-icon" />
                                        )}
                                    </button>
                                    <button
                                        title="Dislike"
                                        className="action-button"
                                        onClick={() => {
                                            if (feedback === false) return;
                                            handleMessageFeedback(
                                                message,
                                                typeof feedback !== "undefined" ? !feedback : false
                                            );
                                        }}
                                    >
                                        {feedback === false ? (
                                            <MdThumbDownAlt className="action-icon" />
                                        ) : (
                                            <MdOutlineThumbDownOffAlt className="action-icon" />
                                        )}
                                    </button>
                                    <button
                                        title="Regenrate Response"
                                        className="action-button"
                                        onClick={console.log}
                                    >
                                        <MdReplay className="action-icon" />
                                    </button>
                                </div>
                            )}
                        </div>
                        {type === EMessageTypes.USER && (
                            <div className="user-iconWrapper">
                                <RiUser6Fill className="userIcon" />
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="messageWrapper botMessageWrapper">
                        <div className="bot-iconWrapper">
                            <RiChatSmile3Fill className="botIcon" />
                        </div>
                        <div className="typing-anim-wrapper">
                            <div className="typing-dot-pulse"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form className="inputFormWrapper" onSubmit={handleUserMessage}>
                <IconButton
                    icon={BsFillMicFill}
                    onClick={console.log}
                    className="voice-input-button"
                />
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
        </Fragment>
    );
};

export default Main;
