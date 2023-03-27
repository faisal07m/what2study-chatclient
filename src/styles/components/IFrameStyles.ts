import { CSSProperties } from "react";

interface IIFrameStyles {
    widgetIframe: CSSProperties;
}

export const getIFrameStyles = (): IIFrameStyles => {
    return {
        widgetIframe: {
            border: "none",
        },
    };
};
