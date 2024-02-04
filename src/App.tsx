import ChatClient from "components/ChatClient";
import { DataProvider } from "hooks";

import { FC, useEffect, useState } from "react";

import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const LOCALSTORAGE_SESSION_ID_KEY = "what2studyUserSessionId";
const WHAT2STUDY_BACKEND_URL = "http://localhost:1339/what2study/parse/functions";
const WHAT2STUDY_X_PARSE_APP_ID = "what2study";
const WHAT2STUDY_X_PARSE_MASTERKEY = "what2studyMaster";

const App: FC = (props) => {
    const [chatClientProps, setChatClientProps] = useState<any>();

    const getChatClientConfiguration = async () => {
        if ("chatbotId" in props && "accessToken" in props && !chatClientProps) {
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
            setChatClientProps(response?.result ? response.result : undefined);
            return;
        }
        setChatClientProps(props || {});
    };

    useEffect(() => {
        // TO USE CHAT CLIENT WITH BOT ID AND ACCESS TOKEN
        getChatClientConfiguration();
    }, []);

    return <DataProvider>{chatClientProps && <ChatClient {...chatClientProps} />}</DataProvider>;
};

export default App;
