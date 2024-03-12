import { ERoute, useData } from "hooks";
import IconButton from "utilities/IconButton";

import { FC, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
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

    const [t, i18n] = useTranslation("global");

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
                                {t("introPage1.hello")}{" "}
                                <span className="is-block-bold">{t("introPage1.iam")}</span>{t("introPage1.built")}
                            </p>
                        </div>
                        <button
                            className="play-tutorial-button"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <div className="pt-iconWrapper">
                                <BsFillPlayCircleFill className="pt-icon" />
                            </div>
                            <span className="pt-button-name">{t("introPage1.play")}</span>
                        </button>
                        <button className="is-tochat-button">{t("introPage1.chat")}</button>
                    </div>
                )}
                {introPage == 1 && (
                    <div className="is-contentWrapper">
                        <img src={chatbotProfileImage} className="is-icon" alt="Bot Icon" />
                        <div className="is-infoBlock2">
                        <p className="is-block-text">
                            {t("introPage2.Lets")}{" "}
                                <span className="is-block-bold">{t("introPage2.easy")}</span>{t("introPage2.thats")}<span className="is-block-bold">{t("introPage2.functions")}</span>
                            </p>
                        </div>
                        <div className="is-infoBlock2">
                            <p className="is-block-text">
                            {t("introPage2.everything")}
                            </p>
                        </div>
                        {/* <button className="is-tochat-button">To Chat</button> */}
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
                    {t("introPage1.okay")}
                </button>
            </div>
        </Fragment>
    );
};

export default IntroPage;