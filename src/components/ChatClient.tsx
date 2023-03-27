import { useData } from "hooks";

import { FC, Fragment } from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import ChatContainer from "./ChatContainer";
import OpenChatButton from "./OpenChatButton";

const ChatClient: FC = () => {
    const { isChatOpen, setIsChatOpen } = useData();

    return (
        <Fragment>
            <ChatContainer isChatOpen={isChatOpen} />
            <OpenChatButton
                icon={BsChatQuoteFill}
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
            />
        </Fragment>
    );
};

export default ChatClient;
