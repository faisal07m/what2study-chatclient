import ChatClient from "components/ChatClient";
import { DataProvider } from "hooks";

import { FC } from "react";

import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const LOCALSTORAGE_SESSION_ID_KEY = "what2studyUserSessionId";

const App: FC = (props) => {
    return (
        <DataProvider>
            <ChatClient {...props} />
        </DataProvider>
    );
};

export default App;
