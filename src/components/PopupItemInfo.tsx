import { FC } from "react";

import { PopupContents } from "./PopupScreen";

const PopupItemInfo: FC = () => {
    return (
        <PopupContents title="Info">
            <h6>This is bot info.</h6>
        </PopupContents>
    );
};

export default PopupItemInfo;
