import { EThemes } from "constants/types";

import { CSSProperties } from "react";

interface IOpenButtonStyles {
    buttonIframeStyles: CSSProperties;
    openButton: CSSProperties;
    icon: CSSProperties;
}

interface IOpenButtonStylesOptions {
    isChatOpen: boolean;
}

export const getOpenButtonStyles = (
    theme: EThemes,
    options: IOpenButtonStylesOptions
): IOpenButtonStyles => {
    const { isChatOpen } = options;

    return {
        buttonIframeStyles: {
            width: "54px",
            height: "54px",
            position: "fixed",
            bottom: "24px",
            right: "24px",
        },
        openButton: {
            width: "48px",
            height: "48px",
            margin: "3px",
            boxShadow: "0px 2px 3px 0px #9b9b9b",
            backgroundColor: "#0c8de9",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            ...(isChatOpen
                ? {
                      backgroundColor: "#f0f0f0",
                  }
                : {}),
        },
        icon: {
            fontSize: "22px",
            color: "#ffffff",
            ...(isChatOpen
                ? {
                      color: "#000000",
                  }
                : {}),
        },
    };
};
