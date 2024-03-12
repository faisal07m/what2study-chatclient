import { useData } from "hooks";

import { ChangeEvent, FC } from "react";
import FormRange from "react-bootstrap/esm/FormRange";
import { useTranslation } from "react-i18next";

import { PopupContents } from "./PopupScreen";


const PopupItemFilters: FC = () => {
    const { chatFilters, setChatFilters } = useData();

    const handleFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChatFilters({
            ...chatFilters,
            [e.target.name]: e.target.value,
        });
    };
    const [t, i18n] = useTranslation("global");
    return (
        <PopupContents title= {t("filters.personality")} className="popup-contents-filters">
            <div className="chip-buttons-wrapper">
                <button className="app-chip-button" title="Reset">
                {t("filters.reset")}
                </button>
                <button className="app-chip-button" title="Discard Changes">
                {t("filters.discard")}
                </button>
            </div>
            <div className="filters-wrapper">
                <div className="filter">
                    <div className="slider-filter-datalist">
                        <span className="slider-option">{t("filters.friendly")}</span>
                        <span className="slider-option">{t("filters.professional")}</span>
                    </div>
                    <FormRange
                        name="tone"
                        value={chatFilters.tone}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={handleFilterValue}
                        className="form-range"
                    ></FormRange>
                </div>
                <div className="filter">
                    <div className="slider-filter-datalist">
                        <span className="slider-option">{t("filters.opinionated")}</span>
                        <span className="slider-option">{t("filters.neutral")}</span>
                    </div>
                    <FormRange
                        name="sentiment"
                        value={chatFilters.sentiment}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={handleFilterValue}
                        className="form-range"
                    ></FormRange>
                </div>
                <div className="filter">
                    <div className="slider-filter-datalist">
                        <span className="slider-option">{t("filters.many")}</span>
                        <span className="slider-option">{t("filters.no")}</span>
                    </div>
                    <FormRange
                        name="emotiveness"
                        value={chatFilters.emotiveness}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={handleFilterValue}
                        className="form-range"
                    ></FormRange>
                </div>
                <div className="filter">
                    <div className="slider-filter-datalist">
                        <span className="slider-option">{t("filters.long")}</span>
                        <span className="slider-option">{t("filters.short")}</span>
                    </div>
                    <FormRange
                        name="length"
                        value={chatFilters.length}
                        min={0}
                        max={1}
                        step={0.1}
                        onChange={handleFilterValue}
                        className="form-range"
                    ></FormRange>
                </div>
            </div>
        </PopupContents>
    );
};

export default PopupItemFilters;