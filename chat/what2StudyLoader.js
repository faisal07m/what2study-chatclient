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
    // const what2StudyClientSrc = "https://cpstech.de/what2StudyClient";
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
        // if (window.What2Study) {
        //     window.What2Study({ accessToken: token, chatbotId: bot_id });
        // } else if (top.What2Study) {
        //     top.What2Study({ accessToken: token, chatbotId: bot_id });
        // }
        if (window.What2Study) {
            window.What2Study({ accessToken: "", chatbotId: "" });
        } else if (top.What2Study) {
            top.What2Study({ accessToken: "", chatbotId: "" });
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
        console.log(document.getElementById("what2studyIDChrome"))
       
    };

    if (document.readyState === "complete") {
        appendChildren();
    }
    window.addEventListener("load", appendChildren);
})();


// inject = document.createElement('script');
// inject.src = "https://cpstech.de/what2StudyLoader/?bot_id=rNojLaQA8B&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGF0Ym90SWQiOiJyTm9qTGFRQThCIiwicHVycG9zZSI6ImNoYXRib3RJbnRlZ3JhdGlvbiIsImlhdCI6MTcxNTc1ODM5MX0.jy-juj-U6_m2EJkR4NEJpAXGcBq1hqe3e6B2NjzzYZ0";
// inject.id="initLoader"
// document.getElementsByTagName('head')[0].appendChild(inject);