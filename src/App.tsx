import React, { FC } from "react";

import "./styles/global.scss"; /* eslint-disable-line  */

interface AppProps {
    backgroundColor?: string | "#000000"
}

const App: FC<AppProps> = () => {
    return (
        <div className="chatClient">
            <h1>what2study - ChatClient</h1>
        </div>
    );
};

export default App;
