import { FC } from "react";

import { PopupContents } from "./PopupScreen";

const PopupItemInfo: FC = () => {
    return (
        <PopupContents title="Welcome to What2Study" className="popup-infobox">
            <p className="info-text">
                What2Study is a <span>chatbot</span> that was developed to support in all your
                question and endeavors concerning <span>studies</span>.
            </p>
            <p className="info-text-title">Please keep in mind:</p>
            <p className="info-text">
                What2Study is not a <span>person</span>. Many people were involved in its
                development and throughly tested weather its responses or suggestions were accurate
                and helpful. Still, we <span>can't guarantee</span> that every answer given by this
                chatbot is correct. You need to validate crucial information for yourself.
            </p>
        </PopupContents>
    );
};

export default PopupItemInfo;
