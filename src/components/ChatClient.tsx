import PropTypes from "prop-types";
import { FC, Fragment } from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import ChatContainer from "./ChatContainer";
import OpenChatButton from "./OpenChatButton";

const ChatClient: FC = (props) => {
    console.log(props);
    return (
        <Fragment>
            <ChatContainer {...props} />
            <OpenChatButton icon={BsChatQuoteFill} />
        </Fragment>
    );
};

export default ChatClient;

ChatClient.propTypes = {
    objectId: PropTypes.string,
    chatbotId: PropTypes.string.isRequired,
    userId: PropTypes.string,
    chatbotName: PropTypes.string,
    chatbotBubbleIcons: PropTypes.string,
    chatbotProfileImage: PropTypes.string,
    defaultSettings: PropTypes.shape({
        chatbotLanguage: PropTypes.string,
        audioNarration: PropTypes.bool,
        narrator: PropTypes.string,
    }),
    chatboxBehaviour: PropTypes.shape({
        formality: PropTypes.number,
        opinion: PropTypes.number,
        emotion: PropTypes.number,
        length: PropTypes.number,
        topics: PropTypes.number,
        tone: PropTypes.number,
        chatbotBehaviourName: PropTypes.string,
    }),
    chatbotReplies: PropTypes.shape({
        randomQuestions: PropTypes.bool,
        showRandomQuestionsMessage: PropTypes.string,
    }),
    chatbotContact: PropTypes.shape({
        talkToHuman: PropTypes.bool,
        showTalkToHumanMessage: PropTypes.string,
    }),
    chatbotLook: PropTypes.shape({
        chatbotHeader: PropTypes.shape({
            chatbotHeaderBackgroundColor: PropTypes.string,
            chatbotHeaderIconFontColor: PropTypes.string,
        }),
        chatbotBackground: PropTypes.shape({
            chatbotBackgroundColor: PropTypes.string,
        }),
        textBoxUser: PropTypes.shape({
            textBoxUserColor: PropTypes.string,
            textBoxUserFontColor: PropTypes.string,
            textBoxFontStyle: PropTypes.string,
        }),
        textBoxChatbotReply: PropTypes.shape({
            textBoxChatbotReplyColor: PropTypes.string,
            textBoxChatbotReplyFontColor: PropTypes.string,
            textBoxChatboxReplyFontStyle: PropTypes.string,
        }),
        UIGroupA: PropTypes.shape({
            UIGroupAUIBackground: PropTypes.string,
            UIGroupAUIHighlight: PropTypes.string,
        }),
        UIGroupB: PropTypes.shape({
            UIGroupBUIBackground: PropTypes.string,
            UIGroupBUIHighlight: PropTypes.string,
        }),
        chatbotLookName: PropTypes.string,
    }).isRequired,
};

ChatClient.defaultProps = {
    objectId: "",
    chatbotName: "",
    chatbotBubbleIcons: "https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png",
    chatbotProfileImage: "https://openclipart.org/image/2000px/307415",
    defaultSettings: {
        chatbotLanguage: "English",
        audioNarration: true,
        narrator: "John",
    },
    chatboxBehaviour: {
        formality: 0,
        opinion: 0,
        emotion: 0,
        length: 0,
        topics: 0,
        tone: 0,
        chatbotBehaviourName: "",
    },
    chatbotReplies: {
        randomQuestions: true,
        showRandomQuestionsMessage: "",
    },
    chatbotContact: {
        talkToHuman: true,
        showTalkToHumanMessage: "Connecting to a human...",
    },
    chatbotLook: {
        chatbotHeader: {
            chatbotHeaderBackgroundColor: "#0c8de9",
            chatbotHeaderIconFontColor: "#ffffff",
        },
        chatbotBackground: {
            chatbotBackgroundColor: "#ffffff",
        },
        textBoxUser: {
            textBoxUserColor: "#0c8de9",
            textBoxUserFontColor: "#ffffff",
            textBoxFontStyle: "bold",
        },
        textBoxChatbotReply: {
            textBoxChatbotReplyColor: "#e0e0e0",
            textBoxChatbotReplyFontColor: "#000000",
            textBoxChatboxReplyFontStyle: "normal",
        },
        UIGroupA: {
            UIGroupAUIBackground: "rgb(100, 100, 100)",
            UIGroupAUIHighlight: "rgb(200, 200, 200)",
        },
        UIGroupB: {
            UIGroupBUIBackground: "rgb(50, 50, 50)",
            UIGroupBUIHighlight: "rgb(150, 150, 150)",
        },
        chatbotLookName: "",
    },
};
