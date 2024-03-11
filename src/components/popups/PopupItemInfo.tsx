import { FC } from "react";
import { useTranslation } from "react-i18next";


import { PopupContents } from "./PopupScreen";


const PopupItemInfo: FC = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <PopupContents title={t("infoPopup.welcome")}className="popup-infobox">
            <p className="info-text">
            {t("infoPopup.what2study")} <span> {t("infoPopup.chatbot")}</span> {t("infoPopup.that")}<span>{t("infoPopup.studies")}</span>.
            </p>
            <p className="info-text-title">{t("infoPopup.please")}</p>
            <p className="info-text">
            {t("infoPopup.isnot")}<span>{t("infoPopup.person")}</span>{t("infoPopup.many")}<span>{t("infoPopup.cant")}</span> {t("infoPopup.every")}
            </p>
        </PopupContents>
    );
};

export default PopupItemInfo;
