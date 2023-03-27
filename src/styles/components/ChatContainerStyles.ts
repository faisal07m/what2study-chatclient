import { EThemes } from "constants/types";

import { CSSProperties } from "react";

interface IChatContainerStyles {
    containerIframeClosed: CSSProperties;
    containerIframe: CSSProperties;
    chatContainerWrapper: CSSProperties;
    header: CSSProperties;
    headerIcon: CSSProperties;
    headerTitle: CSSProperties;
    chatBox: CSSProperties;
    messageWrapper: CSSProperties;
    message: CSSProperties;
    botMessageWrapper: CSSProperties;
    botMessage: CSSProperties;
    botIcon: CSSProperties;
    userMessageWrapper: CSSProperties;
    userMessage: CSSProperties;
    userIcon: CSSProperties;
    inputFormWrapper: CSSProperties;
    inputField: CSSProperties;
    sendButton: CSSProperties;
    buttonIcon: CSSProperties;
}

interface IChatContainerStylesOptions {
    isChatOpen: boolean;
    isInputFocused: boolean;
}

export const getChatContainerStyles = (
    theme: EThemes,
    options: IChatContainerStylesOptions
): IChatContainerStyles => {
    const { isInputFocused } = options;

    return {
        containerIframeClosed: {
            display: "none",
        },
        containerIframe: {
            boxShadow: "0px 2px 6px -2px #9b9b9b",
            width: "400px",
            height: "600px",
            position: "fixed",
            bottom: "90px",
            right: "30px",
            borderRadius: "12px",
            backgroundColor: "#fff",
        },
        chatContainerWrapper: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
        },
        header: {
            backgroundColor: "#0c8de9",
            width: "100%",
            height: "80px",
            fontFamily: "Inter",
            display: "flex",
            alignItems: "center",
            padding: "10px 24px",
            boxSizing: "border-box",
        },
        headerIcon: {
            color: "#ffffff",
            fontSize: "24px",
            marginRight: "10px",
        },
        headerTitle: {
            color: "#ffffff",
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
        },
        chatBox: {
            fontFamily: "Inter",
            height: "calc(100% - 80px - 72px)",
            overflowY: "auto",
        },
        messageWrapper: {
            display: "flex",
            margin: "10px",
            alignItems: "flex-end",
        },
        message: {
            fontSize: "14px",
            maxWidth: "64%",
            padding: "15px",
            borderRadius: "12px",
        },
        botMessageWrapper: {
            justifyContent: "flex-start",
        },
        botMessage: {
            backgroundColor: "#e0e0e0",
            color: "#000000",
            borderBottomLeftRadius: "0",
        },
        botIcon: {
            fontSize: "16px",
            backgroundColor: "#eaeaea",
            padding: "6px",
            color: "#000",
            borderRadius: "50%",
            marginRight: "8px",
        },
        userMessageWrapper: {
            justifyContent: "flex-end",
        },
        userMessage: {
            backgroundColor: "#0c8de9",
            color: "#ffffff",
            fontWeight: 500,
            borderBottomRightRadius: "0",
        },
        userIcon: {
            fontSize: "16px",
            backgroundColor: "#eaeaea",
            padding: "6px",
            color: "#000",
            borderRadius: "50%",
            marginLeft: "8px",
        },
        inputFormWrapper: {
            fontFamily: "Inter",
            height: "72px",
            position: "relative",
            margin: 0,
            padding: "10px 16px",
            boxSizing: "border-box",
        },
        inputField: {
            width: "95%",
            border: "none",
            padding: "12px 20px",
            backgroundColor: "#e9e9e9",
            fontSize: "15px",
            fontFamily: "Inter",
            borderRadius: "30px",
            outline: "none",
            ...(isInputFocused
                ? {
                      outline: "2px solid #0c8de944",
                      backgroundColor: "#ffffff",
                  }
                : {}),
        },
        sendButton: {
            position: "absolute",
            right: "20px",
            bottom: "16px",
            border: "5px solid #fafafa",
            borderRadius: "24px",
            height: "48px",
            width: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0c8de9",
            cursor: "pointer",
        },
        buttonIcon: {
            color: "#ffffff",
            fontSize: "18px",
        },
    };
};
