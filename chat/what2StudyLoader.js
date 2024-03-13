/* eslint-disable */

/*
 * This file is a script that injects what2study bot in the web pages.
 *
 * USAGE:
 * Use the public url of this file into script tag as follows:
 * http://cdn-url-of-what2study/public/what2StudyLoader.js?bot_id={id_of_bot_to_be_injected}&bot_access_token={token_to_access_the_bot}
 *
 * NOTE:
 * 'bot_id' and 'bot_access_token' are necessary URL params to get the bot running on the website.
 * based on these params, bot data such as bot color scheme, whitelist domains, etc. will be fetched from the server and bot will be rendered
 * http://cdn-url-of-what2study/public/what2StudyLoader.js?bot_id={id_of_bot_to_be_injected}&bot_access_token={token_to_access_the_bot}
 *
 *************************************************************************************************************************************************/

const WHAT2STUDY_CONTAINER = "what2studyChatclientWrapper";
const WHAT2STUDY_SCRIPT = "what2studyChatclientScript";

(function () {
    const what2StudyClientSrc = "http://localhost:7777/dist/what2StudyClient.js";

    const getUrlParams = (url) => {
        const variables = {};
        const parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
            variables[key] = value;
        });

        return variables;
    };

    const initClient = () => {
        const what2StudyScript = document.getElementById(WHAT2STUDY_SCRIPT);

        if (!what2StudyScript) return;

        const { bot_id, token } = getUrlParams(what2StudyScript.src);

        if (window.What2Study) {
            window.What2Study({ accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGF0Ym90SWQiOiJIeW0xbTFVbGV2IiwicHVycG9zZSI6ImNoYXRib3RJbnRlZ3JhdGlvbiIsImlhdCI6MTcxMDMxMDUyOX0.Ah838fawODna8Cq6AgaIjhd6ckD8GUOu2CplXwOTP-o", chatbotId: "Hym1m1Ulev" });
        } else if (top.What2Study) {
            top.What2Study({ accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGF0Ym90SWQiOiJIeW0xbTFVbGV2IiwicHVycG9zZSI6ImNoYXRib3RJbnRlZ3JhdGlvbiIsImlhdCI6MTcxMDMxMDUyOX0.Ah838fawODna8Cq6AgaIjhd6ckD8GUOu2CplXwOTP-o", chatbotId: "Hym1m1Ulev" });
        }
    };

    appendChildren = () => {
        const body = document.getElementsByTagName("body")[0];

        if (!!document.getElementById(WHAT2STUDY_CONTAINER)) return;

        const container = document.createElement("div");
        container.id = WHAT2STUDY_CONTAINER;
        body.appendChild(container);

        if (typeof require === "function") {
            initClient();
        } else {
            const scriptTag = document.createElement("script");
            scriptTag.src = what2StudyClientSrc;
            scriptTag.onload = initClient;
            scriptTag.id = WHAT2STUDY_SCRIPT;

            body.appendChild(scriptTag);
        }
    };

    if (document.readyState === "complete") {
        appendChildren();
    }

    window.addEventListener("load", appendChildren);
})();
