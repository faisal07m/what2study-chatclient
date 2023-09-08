import ChatClient from "components/ChatClient";
import { DataProvider } from "hooks";

import { FC } from "react";

import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface AppProps {
    backgroundColor?: string | "#000000";
}

export const LOCALSTORAGE_SESSION_ID_KEY = "what2studyUserSessionId";

const App: FC<AppProps> = () => {
    return (
        <DataProvider>
            <ChatClient />
        </DataProvider>
    );
};

export default App;
