import { useData } from "hooks";

import { FC, Fragment, useEffect } from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import ChatContainer from "./ChatContainer";
import OpenChatButton from "./OpenChatButton";

const WHAT2STUDY_BACKEND_URL = "http://localhost:1339/what2study/parse/functions";
const WHAT2STUDY_X_PARSE_APP_ID = "what2study";
const WHAT2STUDY_X_PARSE_MASTERKEY = "what2studyMaster";

const ChatClient: FC = (props) => {
    const { clientConfig, saveClientConfigurations } = useData();

    const getChatClientConfiguration = async () => {
        if ("chatbotId" in props && "accessToken" in props) {
            const resJson = await fetch(`${WHAT2STUDY_BACKEND_URL}/getChatbotSettings`, {
                method: "POST",
                headers: {
                    "X-Parse-Application-Id": WHAT2STUDY_X_PARSE_APP_ID,
                    "X-Parse-Master-Key": WHAT2STUDY_X_PARSE_MASTERKEY,
                },
                body: JSON.stringify({
                    accessToken: props.accessToken,
                    chatbotId: props.chatbotId,
                }),
            });
            const response = await resJson.json();
            saveClientConfigurations(response.result);
            return;
        }
        saveClientConfigurations(props);
    };

    useEffect(() => {
        // TO USE CHAT CLIENT WITH BOT ID AND ACCESS TOKEN
        if (!clientConfig) {
            getChatClientConfiguration();
        }
    }, []);

    if (clientConfig)
        return (
            <Fragment>
                <ChatContainer />
                <OpenChatButton icon={BsChatQuoteFill} />
            </Fragment>
        );

    return <Fragment />;
};

export default ChatClient;
