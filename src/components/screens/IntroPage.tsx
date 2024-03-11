import { ERoute, useData } from "hooks";
import IconButton from "utilities/IconButton";

import { FC, Fragment, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const IntroPage: FC = () => {
    const { setCurrentRoute, clientConfig } = useData();
    const [introPage, setIntroPage] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const {
        chatbotProfileImage,
        chatbotLook: { chatbotHeader },
    } = clientConfig;

    return (
        <Fragment>
            <div className="introScreen-wrapper">
                {isVideoOpen && (
                    <div className="video-wrapper">
                        <IconButton icon={MdCancel} onClick={() => setIsVideoOpen(false)} />
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/p2rgGbp36K0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                {introPage == 0 && (
                    <div className="is-contentWrapper">
                        <img src={chatbotProfileImage} className="is-icon" alt="Bot Icon" />
                        <div className="is-infoBlock">
                            <p className="is-block-text">
                                Hello. It's nice to meet you!{" "}
                                <span className="is-block-bold">I am a chatbot</span> built to help
                                you with your studies! Before we get started, here are a few
                                important facts.
                            </p>
                        </div>
                        <button
                            className="play-tutorial-button"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <div className="pt-iconWrapper">
                                <BsFillPlayCircleFill className="pt-icon" />
                            </div>
                            <span className="pt-button-name">Play Tutorial</span>
                        </button>
                        <button className="is-tochat-button">To Chat</button>
                    </div>
                )}
                {introPage == 1 && (
                    <div className="is-contentWrapper">
                        <img src={chatbotProfileImage} className="is-icon" alt="Bot Icon" />
                        <div className="is-infoBlock">
                            <p className="is-block-text">
                                Hello. It's nice to meet you!{" "}
                                <span className="is-block-bold">I am a chatbot</span> built to help
                                you with your studies! Before we get started, here are a few
                                important facts.
                            </p>
                        </div>
                        <div className="is-infoBlock">
                            <p className="is-block-text">
                                Hello. It's nice to meet you!{" "}
                                <span className="is-block-bold">I am a chatbot</span> built to help
                                you with your studies! Before we get started, here are a few
                                important facts.
                            </p>
                        </div>
                        <button className="is-tochat-button">To Chat</button>
                    </div>
                )}
                <button
                    className="is-okayNextButton"
                    onClick={() =>
                        introPage < 1 ? setIntroPage(introPage + 1) : setCurrentRoute(ERoute.MAIN)
                    }
                    style={{
                        backgroundColor: chatbotHeader.chatbotHeaderBackgroundColor,
                        color: chatbotHeader.chatbotHeaderIconFontColor,
                    }}
                >
                    Okay!
                </button>
            </div>
        </Fragment>
    );
};

export default IntroPage;
