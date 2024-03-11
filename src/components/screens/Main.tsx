import { LOCALSTORAGE_SESSION_ID_KEY } from "App";
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
import { RiUser6Fill } from "react-icons/ri";

const chatEndpoint = "http://127.0.0.1:5009/chatbot/";

enum EMessageSource {
    BOT = "BOT",
    USER = "USER",
}

enum EMessageType {
    TEXT = "text",
    IMAGE = "image",
    VIDEO = "video",
}

interface IBotMessage {
    source: EMessageSource;
    message: string;
    feedback?: boolean;
    type?: EMessageType;
    url?: string;
}

const initialMessages: IBotMessage[] = [
    {
        source: EMessageSource.BOT,
        message: "Herzlich willkommen bei unserer Studienberatung! Wie kann ich Ihnen heute behilflich sein?",
    },
];

const isYoutubeURL = (url = ""): boolean => {
    const ytRegEx = new RegExp("^(https?://)?(www.youtube.com|youtu.be)/.+$");
    return ytRegEx.test(url);
};

const Main: FC = (props) => {
    const {
        setPopupItem,
        isBotVolumeOn,
        setIsBotVolumeOn,
        setCurrentRoute,
        clientConfig,
        sessionId,
    } = useData();
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<IBotMessage[]>(initialMessages);
    const [loading, setLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const WHAT2STUDY_BACKEND_URL = "http://localhost:1339/what2study/parse/functions";
    const WHAT2STUDY_X_PARSE_APP_ID = "what2study";
    const WHAT2STUDY_X_PARSE_MASTERKEY = "what2studyMaster";

    const {
        chatbotProfileImage,
        chatbotId,
        userId,
        chatbotLook: { textBoxUser, textBoxChatbotReply, UIGroupA, UIGroupB },
    } = clientConfig;

    const [value, setValue] = useState('')
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (clientConfig.randomQuestionEnabled) {
                setMessages((prev) => {
                    return [
                        ...prev,
                        {
                            source: EMessageSource.BOT,
                            message: clientConfig.randomQuestion,
                            type: EMessageType.TEXT,
                            url: "",
                        },
                    ];
                });
            }
        }, 20000)
        // if this effect run again, because `value` changed, we remove the previous timeout
        return () => clearTimeout(timeout)
    }, [value])

    const handleUserMessage = async (e: SyntheticEvent): Promise<void> => {
        e?.preventDefault();
        setLoading(true);
        setMessage("");
        if (message.trim() === "") return;
        setMessages([...messages, { source: EMessageSource.USER, message }]);

        const params = {
            question: message,
            botId: chatbotId,
            sessionId,
            userId: userId,
        };
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
        };
        try {
            const resJson = await fetch(chatEndpoint, options);
            const response = await resJson.json();
            setMessages((prev) => {
                return [
                    ...prev,
                    {
                        source: EMessageSource.BOT,
                        message: response.answer,
                        type:
                            response.type === "image"
                                ? EMessageType.IMAGE
                                : response.type === "video"
                                    ? EMessageType.VIDEO
                                    : EMessageType.TEXT,
                        url: response.url ?? "",
                    },
                ];
            });
            setValue(response.answer)
            setLoading(false);

            let chatbotID
            if ("chatbotId" in props) {
                chatbotID = props.chatbotId
            }
            const currentdate = new Date();
            const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            const responseSaveMSG = await fetch(`${WHAT2STUDY_BACKEND_URL}/saveUserMessage`, {
                method: "POST",
                headers: {
                    "X-Parse-Application-Id": WHAT2STUDY_X_PARSE_APP_ID,
                    "X-Parse-Master-Key": WHAT2STUDY_X_PARSE_MASTERKEY,
                },
                body: JSON.stringify({
                    chatbotId: chatbotID,
                    user: message,
                    bot: response.answer,
                    sessionID: localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)?.trim(),
                    timestamp: datetime,
                }),
            });
        } catch (error) {
            setMessages((prev) => {
                return [
                    ...prev,
                    {
                        source: EMessageSource.BOT,
                        message: "Something went wrong! Please try again.",
                    },
                ];
            });
            setLoading(false);
        }
    };

    const handleMessageFeedback = async (msg: string, feedback: boolean) => {

        const messagesWithFeedback = [...messages];
        const newMessages = messagesWithFeedback.map((msgObj) =>
            msgObj.message == msg
                ? {
                    ...msgObj,
                    feedback,
                }
                : msgObj
        );
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        setMessages(newMessages);
        let chatbotID
        if ("chatbotId" in props) {
            chatbotID = props.chatbotId
        }
        const resJson = await fetch(`${WHAT2STUDY_BACKEND_URL}/saveFeedback`, {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": WHAT2STUDY_X_PARSE_APP_ID,
                "X-Parse-Master-Key": WHAT2STUDY_X_PARSE_MASTERKEY,
            },
            body: JSON.stringify({
                chatbotId: chatbotID,
                messages: newMessages,
                sessionID: localStorage.getItem(LOCALSTORAGE_SESSION_ID_KEY)?.trim(),
                timestamp: datetime,
                type: feedback

            }),
        });

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
                    style={{ backgroundColor: textBoxUser.textBoxUserColor }}
                    icon={MdInfoOutline}
                    onClick={() => setPopupItem(EPopupItem.BOT_INFO)}
                    aria-label="Info"
                    title="Info"
                    iconColor={textBoxUser.textBoxUserFontColor}
                />
                <button
                    className="talk-to-human-btn"
                    style={{
                        backgroundColor: UIGroupB.UIGroupBUIBackground,
                        color: UIGroupB.UIGroupBUIHighlight,
                    }}
                    onClick={() => setCurrentRoute(ERoute.TALK_TO_HUMAN)}
                >
                    Sprich mit uns
                </button>
                <IconButton
                    className="volume-button"
                    icon={isBotVolumeOn ? IoMdVolumeHigh : IoMdVolumeOff}
                    onClick={() => setIsBotVolumeOn(!isBotVolumeOn)}
                    aria-label="Volume"
                    title={isBotVolumeOn ? "Mute" : "Play"}
                    style={{ backgroundColor: UIGroupA.UIGroupAUIBackground }}
                    iconColor={UIGroupA.UIGroupAUIHighlight}
                />
            </div>
            <div className="chatContainer">
                {messages.map(({ message, source, feedback, type, url }, index) => (
                    <div
                        key={index}
                        className={`messageWrapper ${source === EMessageSource.BOT
                            ? "botMessageWrapper"
                            : "userMessageWrapper"
                            }`}
                    >
                        {source === EMessageSource.BOT && (
                            <div
                                className="bot-iconWrapper"
                                style={{ borderColor: UIGroupA.UIGroupAUIBackground }}
                            >
                                <img src={chatbotProfileImage} alt="bot" className="bot-iconImg" />
                            </div>
                        )}
                        <div
                            className={`message ${source === EMessageSource.BOT ? "botMessage" : "userMessage"
                                }`}
                            style={
                                source === EMessageSource.BOT
                                    ? {
                                        backgroundColor:
                                            textBoxChatbotReply.textBoxChatbotReplyColor,
                                        color: textBoxChatbotReply.textBoxChatbotReplyFontColor,
                                        fontFamily:
                                            textBoxChatbotReply.textBoxChatboxReplyFontStyle,
                                    }
                                    : {
                                        backgroundColor: textBoxUser.textBoxUserColor,
                                        color: textBoxUser.textBoxUserFontColor,
                                        fontFamily: textBoxUser.textBoxFontStyle,
                                    }
                            }
                        >
                            {type === EMessageType.VIDEO ? (
                                isYoutubeURL(url) ? (
                                    <iframe
                                        src={url}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="bot-msg-ytvideo"
                                    />
                                ) : (
                                    <video
                                        src={url}
                                        className="bot-msg-video"
                                        controls
                                        disablePictureInPicture={false}
                                    />
                                )
                            ) : type === EMessageType.IMAGE ? (
                                <img src={url} className="bot-msg-img" alt="img" />
                            ) : (
                                <Fragment />
                            )}
                            {message}
                            {source === EMessageSource.BOT && (
                                <div className="bot-msg-actions-wrapper">
                                    {/* <button
                                        title="Report"
                                        className="action-button"
                                        onClick={console.log}
                                        style={{ backgroundColor: UIGroupA.UIGroupAUIBackground }}
                                    >
                                        <MdOutlineWarningAmber
                                            className="action-icon"
                                            color={UIGroupA.UIGroupAUIHighlight}
                                        />
                                    </button> */}
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
                                        style={{ backgroundColor: UIGroupA.UIGroupAUIBackground }}
                                    >
                                        {feedback === true ? (
                                            <MdThumbUpAlt
                                                className="action-icon"
                                                color={UIGroupA.UIGroupAUIHighlight}
                                            />
                                        ) : (
                                            <MdOutlineThumbUpOffAlt
                                                className="action-icon"
                                                color={UIGroupA.UIGroupAUIHighlight}
                                            />
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
                                        style={{ backgroundColor: UIGroupA.UIGroupAUIBackground }}
                                    >
                                        {feedback === false ? (
                                            <MdThumbDownAlt
                                                className="action-icon"
                                                color={UIGroupA.UIGroupAUIHighlight}
                                            />
                                        ) : (
                                            <MdOutlineThumbDownOffAlt
                                                className="action-icon"
                                                color={UIGroupA.UIGroupAUIHighlight}
                                            />
                                        )}
                                    </button>
                                    <button
                                        title="Regenrate Response"
                                        className="action-button"
                                        onClick={console.log}
                                        style={{ backgroundColor: UIGroupA.UIGroupAUIBackground }}
                                    >
                                        <MdReplay
                                            className="action-icon"
                                            color={UIGroupA.UIGroupAUIHighlight}
                                        />
                                    </button>
                                </div>
                            )}
                        </div>
                        {source === EMessageSource.USER && (
                            <div className="user-iconWrapper">
                                <RiUser6Fill className="userIcon" />
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="messageWrapper botMessageWrapper">
                        <div
                            className="bot-iconWrapper"
                            style={{ borderColor: UIGroupA.UIGroupAUIBackground }}
                        >
                            <img src={chatbotProfileImage} alt="bot" className="bot-iconImg" />
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
                    style={{ backgroundColor: UIGroupA.UIGroupAUIBackground }}
                    iconColor={UIGroupA.UIGroupAUIHighlight}
                />
                <input
                    className={`inputField ${isInputFocused ? "inputFieldFocused" : ""}`}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
                <button
                    type="submit"
                    className="sendButton"
                    style={{
                        backgroundColor: UIGroupB.UIGroupBUIBackground,
                    }}
                    onClick={handleUserMessage}
                >
                    <IoSend className="buttonIcon" color={UIGroupB.UIGroupBUIHighlight} />
                </button>
            </form>
        </Fragment>
    );
};

export default Main;
