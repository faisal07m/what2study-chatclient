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
const WHAT2STUDY_API = ""; // API URL

(function () {
    const what2StudyClientSrc = "http://localhost:3000/dist/what2StudyClient.js";

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

        const { bot_id, bot_access_token } = getUrlParams(what2StudyScript.src);

        // fetch(`${WHAT2STUDY_API}/api/bot_id/bot_access_token`, {
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((responseObject) => {
        //         if (responseObject.success) {
        //             const configObject = responseObject.data;

        //             if (window.ChatClient) {
        //                 window.ChatClient(configObject);
        //             } else if (top.ChatClient) {
        //                 top.ChatClient(configObject);
        //             }
        //         }
        //     });
        window.What2Study();
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
