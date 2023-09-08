import { FC, Fragment } from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import ChatContainer from "./ChatContainer";
import OpenChatButton from "./OpenChatButton";

const ChatClient: FC = () => {
    return (
        <Fragment>
            <ChatContainer />
            <OpenChatButton icon={BsChatQuoteFill} />
        </Fragment>
    );
};

export default ChatClient;
