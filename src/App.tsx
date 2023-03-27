import ChatClient from "components/ChatClient";
import { DataProvider } from "hooks";

import { FC } from "react";

interface AppProps {
    backgroundColor?: string | "#000000";
}

const App: FC<AppProps> = () => {
    return (
        <DataProvider>
            <ChatClient />
        </DataProvider>
    );
};

export default App;
