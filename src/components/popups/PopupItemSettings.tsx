import { EChatLanguage, useData } from "hooks";

import { ChangeEvent, FC } from "react";
import { FormSelect } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";

import { PopupContents } from "./PopupScreen";



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

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    const dummyUserAssumptions = [
        t("settings.userAssumption1"),
        t("settings.userAssumption2"),
        t("settings.userAssumption3")
      ];


    return (
        <PopupContents title={t("settings.settings")} className="popup-settings-wrapper">
            <div className="chip-button-wrapper">
                <button className="app-chip-button">{t("settings.restart")}</button>
            </div>
            <div className="setting-block language-select-wrapper">
                <span className="block-title">{t("settings.language")}</span>
                <button className="app-chip-button" style={{ marginLeft: '10px'}} onClick={() => handleChangeLanguage("en")}><img src="/images/uk.png" alt="EN"  style={{ width: '22px', height: '22px', marginRight: '4px' }} /> EN</button>
                <button className="app-chip-button" onClick={() => handleChangeLanguage("de")}><img src="/images/germany.png" alt="DE"  style={{ width: '22px', height: '22px', marginRight: '4px' }} /> DE</button>
                {/* <FormSelect
                    value={language}
                    size="sm"
                    className="language-select"
                    onChange={handleLanguage}
                >
                    {Object.values(EChatLanguage).map((lang) => (
                        <option value={lang}>{getLanguage(lang)}</option>
                    ))}
                </FormSelect> */}
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
