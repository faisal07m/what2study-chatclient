/* eslint-disable */
// @ts-nocheck
import { IIframeProps, IframeType } from "constants/types";

import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const isFirefox = typeof InstallTrigger !== "undefined";

const getStyles = (iframeType: IframeType) => {
    switch (iframeType) {
        case IframeType.CHAT_CONTAINER_CLOSED:
            return {
                border: "none",
                boxShadow: "0px 2px 6px -2px #9b9b9b",
                width: "400px",
                height: "600px",
                position: "fixed",
                bottom: "90px",
                right: "30px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                display: "none",
            };

        case IframeType.CHAT_CONTAINER_OPEN:
            return {
                border: "none",
                boxShadow: "0px 2px 6px -2px #9b9b9b",
                width: "400px",
                height: "600px",
                position: "fixed",
                bottom: "90px",
                right: "30px",
                borderRadius: "12px",
                backgroundColor: "#fff",
            };

        case IframeType.CHAT_OPEN_BUTTON:
            return {
                border: "none",
                width: "54px",
                height: "54px",
                position: "fixed",
                bottom: "24px",
                right: "24px",
            };

        default:
            return {
                border: "none",
            };
    }
};

export const IFrame: FC<IIframeProps> = (props) => {
    const { children, iframeType, ...rest } = props;

    const [contentRef, setContentRef] = useState(null);

    const mountNode = contentRef?.contentWindow?.document?.body;
    const mountNodeDoc = contentRef?.contentWindow?.document;

    const styles = getStyles(iframeType);

    const addStyles = () => {
        const link = mountNodeDoc.createElement("link");
        link.href = "http://localhost:3000/dist/what2studyChatClientStyles.css";
        link.rel = "stylesheet";
        link.type = "text/css";
        mountNodeDoc.head.appendChild(link);
    };

    useEffect(() => {
        if (mountNode) {
            mountNode.style = "margin: 0;";
            addStyles();
        }
    }, [mountNode]);

    return (
        <iframe
            style={styles}
            {...rest}
            onLoad={isFirefox ? (e) => setContentRef(e.target) : undefined}
            ref={!isFirefox ? setContentRef : undefined}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
};
