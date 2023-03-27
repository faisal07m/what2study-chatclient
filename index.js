import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";

const defaultRoot = "what2study-chatclient";

const W2SChatClient = (clientConfigurations = {}) => {
    const { rootId = defaultRoot, ...rest } = clientConfigurations;
    const root = ReactDOM.createRoot(document.getElementById(rootId));

    root.render(<App {...rest} />);
};

export default W2SChatClient;
