import { useData } from "hooks";

import { ChangeEvent, FC } from "react";
import FormRange from "react-bootstrap/esm/FormRange";

import { PopupContents } from "./PopupScreen";

const PopupItemFilters: FC = () => {
    const { chatFilters, setChatFilters } = useData();

    const handleFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChatFilters({
            ...chatFilters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <PopupContents title="Chatbot Personality" className="popup-contents-filters">
            <div className="chip-buttons-wrapper">
                <button className="app-chip-button" title="Reset">
                    Reset
                </button>
                <button className="app-chip-button" title="Discard Changes">
                    Discard Changes
                </button>
            </div>
            <div className="filters-wrapper">
                <div className="filter">
                    <div className="slider-filter-datalist">
                        <span className="slider-option">Friendly</span>
                        <span className="slider-option">Professional</span>
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
                        <span className="slider-option">Opinionated</span>
                        <span className="slider-option">Neutral</span>
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
                        <span className="slider-option">Many emojis</span>
                        <span className="slider-option">No emojis</span>
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
                        <span className="slider-option">Long answers</span>
                        <span className="slider-option">Short answers</span>
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
