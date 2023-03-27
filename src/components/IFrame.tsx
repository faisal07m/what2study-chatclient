/* eslint-disable */
// @ts-nocheck
import { IIframeProps } from "constants/types";
import { getIFrameStyles } from "styles/components/IFrameStyles";

import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const IFrame: FC<IIframeProps> = (props) => {
    const { children, style, className, ...rest } = props;

    const [contentRef, setContentRef] = useState(null);

    const styles = getIFrameStyles();

    const mountNode = contentRef?.contentWindow?.document?.body;
    const mountNodeDoc = contentRef?.contentWindow?.document;

    const addStyles = () => {
        const style = mountNodeDoc.createElement("style");
        style.append(
            "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');"
        );
        mountNodeDoc.head.appendChild(style);
    };

    useEffect(() => {
        if (mountNode) {
            mountNode.style = "margin: 0;";
            addStyles();
        }
    }, [mountNode]);

    return (
        <iframe
            style={{ ...styles.widgetIframe, ...style }}
            className={className}
            {...rest}
            ref={setContentRef}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
};
