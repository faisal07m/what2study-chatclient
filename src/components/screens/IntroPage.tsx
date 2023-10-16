import { EPopupItem, useData } from "hooks";
import IconButton from "utilities/IconButton";

import { FC, Fragment } from "react";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

const IntroPage: FC = () => {
    const { setPopupItem, isBotVolumeOn, setIsBotVolumeOn } = useData();

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

                <IconButton
                    className="volume-button"
                    icon={isBotVolumeOn ? IoMdVolumeHigh : IoMdVolumeOff}
                    onClick={() => setIsBotVolumeOn(!isBotVolumeOn)}
                    aria-label="Volume"
                    title={isBotVolumeOn ? "Mute" : "Play"}
                />
            </div>
            <div className="introScreen-wrapper">
                <p>Intro Screen</p>
            </div>
        </Fragment>
    );
};

export default IntroPage;
