import { EChatLanguage, useData } from "hooks";

import { ChangeEvent, FC } from "react";
import { FormSelect } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

import { PopupContents } from "./PopupScreen";

const dummyUserAssumptions = ["Studies design", "22 year old", "University of Bielefeld"];

const getLanguage = (language: EChatLanguage) => {
    switch (language) {
        case EChatLanguage.EN:
            return "🇬🇧 EN";

        case EChatLanguage.DE:
            return "🇩🇪 DE";

        default:
            return "🇬🇧 EN";
    }
};

const PopupItemSettings: FC = () => {
    const { language, setLanguage } = useData();

    const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as EChatLanguage);
    };

    return (
        <PopupContents title="Settings" className="popup-settings-wrapper">
            <div className="chip-button-wrapper">
                <button className="app-chip-button">Restart Intro</button>
            </div>
            <div className="setting-block language-select-wrapper">
                <span className="block-title">Language</span>
                <FormSelect
                    value={language}
                    size="sm"
                    className="language-select"
                    onChange={handleLanguage}
                >
                    {Object.values(EChatLanguage).map((lang) => (
                        <option value={lang}>{getLanguage(lang)}</option>
                    ))}
                </FormSelect>
            </div>
            <div className="setting-block user-assumptions">
                <span className="block-title">User Assumption</span>
                <div className="chips-wrapper">
                    {dummyUserAssumptions.map((assumption) => {
                        return (
                            <span className="app-chip-with-close-btn">
                                {assumption}
                                <button className="close-btn">
                                    <IoCloseSharp className="close-icon" />
                                </button>
                            </span>
                        );
                    })}
                </div>
            </div>
        </PopupContents>
    );
};

export default PopupItemSettings;
