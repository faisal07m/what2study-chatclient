import { ISettingsListProps } from "constants/types";
import { EChatDifficultyLevel, IChatSettings, useData } from "hooks";

import { FC } from "react";
import { MdEdit, MdOutlineKeyboardBackspace, MdPrivacyTip } from "react-icons/md";

const difficultyLevel = [
    { type: EChatDifficultyLevel.CREATIVE, text: "Creative" },
    { type: EChatDifficultyLevel.BALANCED, text: "Balanced" },
    { type: EChatDifficultyLevel.PRECISE, text: "Precise" },
];

const SettingsItem: FC<ISettingsListProps> = (props) => {
    const { icon: Icon, settingName, children } = props;

    return (
        <div className="setting-type-block">
            <div className="setting-type-header">
                <Icon className="setting-type-icon" />
                <p className="setting-type-heading">{settingName}</p>
            </div>
            <div className="settings-list">{children}</div>
        </div>
    );
};

export const SettingsMenu: FC = () => {
    const { isSettingsPageOpen, setIsSettingsPageOpen, chatSettings, setChatSettings } = useData();

    const { chatDifficultyLevel, conversationFallbackAnalytics, restoreChatOnReturn } =
        chatSettings;

    const handleChatSettings = (setting: Partial<IChatSettings>) => {
        setChatSettings({
            ...chatSettings,
            ...setting,
        });
    };

    const handleCloseSettings = () => {
        setIsSettingsPageOpen(false);
    };

    return (
        <div className={`settings-menu ${isSettingsPageOpen ? "settings-open" : ""}`}>
            <div className="settings-header">
                <button className="settings-close-button" onClick={handleCloseSettings}>
                    <MdOutlineKeyboardBackspace className="settings-close-icon" />
                </button>
                <h2 className="settings-heading">Settings</h2>
            </div>
            <div className="settings-container">
                <SettingsItem icon={MdEdit} settingName="Difficulty Level">
                    {difficultyLevel.map((difficulty, index) => {
                        return (
                            <label key={index} className="settings-list-item">
                                {difficulty.text}
                                <input
                                    type="radio"
                                    checked={chatDifficultyLevel === difficulty.type}
                                    name="radio"
                                    className="radio-button"
                                    onClick={() =>
                                        handleChatSettings({ chatDifficultyLevel: difficulty.type })
                                    }
                                />
                            </label>
                        );
                    })}
                </SettingsItem>
                <SettingsItem icon={MdPrivacyTip} settingName="Privacy">
                    <label className="settings-list-item">
                        Restore Chat
                        <input
                            type="checkbox"
                            checked={restoreChatOnReturn}
                            onClick={() =>
                                handleChatSettings({
                                    restoreChatOnReturn: !restoreChatOnReturn,
                                })
                            }
                        />
                    </label>
                    <label className="settings-list-item">
                        Fallback Analytics
                        <input
                            type="checkbox"
                            checked={conversationFallbackAnalytics}
                            onClick={() =>
                                handleChatSettings({
                                    conversationFallbackAnalytics: !conversationFallbackAnalytics,
                                })
                            }
                        />
                    </label>
                </SettingsItem>
            </div>
        </div>
    );
};
