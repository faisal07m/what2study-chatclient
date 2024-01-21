/* eslint-disable */
// @ts-nocheck
import { IIframeProps, IframeType } from "constants/types";
import { useData } from "hooks";

import { FC, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const isFirefox = typeof InstallTrigger !== "undefined";

const getStyles = (
    iframeType: IframeType,
    isChatOpen: boolean,
    isMobileScreen: boolean = false
) => {
    switch (iframeType) {
        case IframeType.CHAT_CONTAINER_CLOSED:
            return {
                border: "none",
                boxShadow: "#32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px",
                width: isMobileScreen ? "100%" : "400px",
                height: isMobileScreen ? "100%" : "600px",
                position: "fixed",
                bottom: isMobileScreen ? "0" : "100px",
                right: isMobileScreen ? "0" : "30px",
                borderRadius: isMobileScreen ? "0" : "12px",
                backgroundColor: "#fff",
                display: "none",
            };

        case IframeType.CHAT_CONTAINER_OPEN:
            return {
                border: "none",
                boxShadow: "#32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px",
                width: isMobileScreen ? "100%" : "400px",
                height: isMobileScreen ? "100%" : "600px",
                position: "fixed",
                bottom: isMobileScreen ? "0" : "100px",
                right: isMobileScreen ? "0" : "30px",
                borderRadius: isMobileScreen ? "0" : "12px",
                backgroundColor: "#fff",
            };

        case IframeType.CHAT_OPEN_BUTTON:
            return {
                display: isChatOpen && isMobileScreen ? "none" : "block",
                border: "none",
                width: "54px",
                height: "54px",
                position: "fixed",
                bottom: "24px",
                right: "24px",
                borderRadius: "50%",
            };

        default:
            return {
                border: "none",
            };
    }
};

const isDevelopment = process.env.NODE_ENV === "development";

export const IFrame: FC<IIframeProps> = (props) => {
    const { children, iframeType, ...rest } = props;

    const [contentRef, setContentRef] = useState(null);
    const { isChatOpen, setIsMobileScreen } = useData();
    const [styles, setStyles] = useState(getStyles(iframeType, isChatOpen, false));

    const mountNode = contentRef?.contentWindow?.document?.body;
    const mountNodeDoc = contentRef?.contentWindow?.document;

    const addStyles = () => {
        const link = mountNodeDoc.createElement("link");
        link.href = "http://localhost:7777/dist/what2StudyClientStyles.css";
        link.rel = "stylesheet";
        link.type = "text/css";
        mountNodeDoc.head.appendChild(link);
    };

    const handleWindowResize = (event) => {
        const isMobileScreen = window.innerWidth < 600;
        setStyles(getStyles(iframeType, isChatOpen, isMobileScreen));
        setIsMobileScreen(isMobileScreen);
    };

    useEffect(() => {
        handleWindowResize();
    }, [iframeType, isChatOpen]);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (mountNode) {
            mountNode.style = "margin: 0;";
            addStyles();
        }
    }, [mountNode]);

    if (isDevelopment) {
        return (
            <div style={styles} className="development-div">
                {children}
            </div>
        );
    }

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
