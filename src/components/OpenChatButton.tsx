import { IOpenChatButtonProps } from "constants/types";
import { useData } from "hooks";
import { getOpenButtonStyles } from "styles/components/OpenChatButtonStyles";

import { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

import { IFrame } from "./IFrame";

const OpenChatButton: FC<IOpenChatButtonProps> = (props) => {
    const { isChatOpen, setIsChatOpen, icon } = props;
    const { currentTheme } = useData();

    const styles = getOpenButtonStyles(currentTheme, { isChatOpen });

    const Icon = !isChatOpen ? icon : BiChevronDown;

    const handleOpenChatButtonClick = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <IFrame style={styles.buttonIframeStyles}>
            <button
                style={styles.openButton}
                onClick={handleOpenChatButtonClick}
            >
                <Icon style={styles.icon} />
            </button>
        </IFrame>
    );
};

export default OpenChatButton;
