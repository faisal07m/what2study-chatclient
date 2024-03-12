import { EChatLanguage, useData } from "hooks";

import { ChangeEvent, FC } from "react";
import { FormSelect } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

import { PopupContents } from "./PopupScreen";

import { useTranslation } from 'react-i18next';
const dummyUserAssumptions = ["Studies design", "22 year old", "University of Bielefeld"];

const getLanguage = (language: EChatLanguage) => {
    switch (language) {
        case EChatLanguage.EN:
            return "🇬🇧 en";

        case EChatLanguage.DE:
            return "🇩🇪 de";

        default:
            return "🇬🇧 en";
    }
};

const PopupItemSettings: FC = () => {
    const { language, setLanguage } = useData();
    const [t, i18n] = useTranslation("global");
    const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as EChatLanguage);
        i18n.changeLanguage(e.target.value.toLowerCase());
    };

    return (
        <PopupContents title="Settings" className="popup-settings-wrapper">
            <div className="chip-button-wrapper">
                <button className="app-chip-button">Restart Intro</button>
            </div>
            <div className="setting-block language-select-wrapper">
                <span className="block-title">{t("settings.language")}</span>
                {/* <button className="app-chip-button" style={{ marginLeft: '10px'}} onClick={() => handleChangeLanguage("en")}> 🇬🇧 EN</button>
                <button className="app-chip-button" onClick={() => handleChangeLanguage("de")}>🇩🇪 DE</button> */}
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
                <span className="block-title">{t("settings.user")}</span>
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
