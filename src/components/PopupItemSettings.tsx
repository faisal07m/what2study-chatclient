import { FC } from "react";
import { Button } from "react-bootstrap";

import { PopupContents } from "./PopupScreen";

const PopupItemSettings: FC = () => {
    return (
        <PopupContents title="Settings">
            <Button>Restart Intro</Button>
        </PopupContents>
    );
};

export default PopupItemSettings;
