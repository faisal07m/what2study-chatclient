import { IframeType } from "constants/types";
import { EPopupItem, ERoute, useData } from "hooks";
import IconButton from "utilities/IconButton";

import { FC, Fragment } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { IoClose, IoSettingsSharp } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

import { IFrame } from "../utilities/IFrame";

import PopupScreen from "./popups/PopupScreen";
import IntroPage from "./screens/IntroPage";
import Main from "./screens/Main";
import TalkToHuman from "./screens/TalkToHuman";

const getScreenAsPerRoute = (route: ERoute) => {
    switch (route) {
        case ERoute.INTRO:
            return <IntroPage />;

        case ERoute.MAIN:
            return <Main />;

        case ERoute.TALK_TO_HUMAN:
            return <TalkToHuman />;

        default:
            return <Fragment />;
    }
};

const ChatContainer: FC = () => {
    const { isChatOpen, isMobileScreen, setIsChatOpen, setPopupItem, currentRoute } = useData();

    return (
        <IFrame
            iframeType={
                isChatOpen ? IframeType.CHAT_CONTAINER_OPEN : IframeType.CHAT_CONTAINER_CLOSED
            }
        >
            <PopupScreen />
            <div className="chatContainerWrapper">
                <div className="header-wrapper">
                    <div className="header">
                        <GiGraduateCap className="header-icon" />
                        <h1 className="header-title">What2Study</h1>
                    </div>
                    <div className="settings-wrapper">
                        <IconButton
                            icon={LuSettings2}
                            onClick={() => setPopupItem(EPopupItem.FILTERS)}
                            aria-label="Filters"
                            title="Filters"
                        />
                        <IconButton
                            icon={IoSettingsSharp}
                            onClick={() => setPopupItem(EPopupItem.SETTINGS)}
                            aria-label="Settings"
                            title="Settings"
                        />
                        {isMobileScreen && (
                            <IconButton
                                icon={IoClose}
                                onClick={() => setIsChatOpen(false)}
                                aria-label="Close"
                                title="Close"
                            />
                        )}
                    </div>
                </div>
                {getScreenAsPerRoute(currentRoute)}
            </div>
        </IFrame>
    );
};

export default ChatContainer;
