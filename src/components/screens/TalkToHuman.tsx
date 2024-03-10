import { ERoute, useData } from "hooks";

import { FC, Fragment, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoIosCall } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface IDayTime {
    day: string;
    time: string;
}

const TalkToHuman: FC = () => {
    const { setCurrentRoute } = useData();

    const [useSavedEmail, setUseSavedEmail] = useState<boolean>(true);
    const [phoneInput, setPhoneInput] = useState<string>("");
    const [preferredDayTime, setPreferredDayTime] = useState<IDayTime>({
        day: "Sat",
        time: "09:00",
    });
    const [t, i18n] = useTranslation("global");
    return (
        <div className="talkToHuman-wrapper">
            <div className="navbar">
                <button className="navBackBtn" onClick={() => setCurrentRoute(ERoute.MAIN)}>
                    <IoChevronBack className="navIcon" />
                    <span className="navText">{t("talk2human.back")}</span>
                </button>
            </div>
            {/* <div className="divider"></div> */}
            <div className="contact-details-wrapper">
                <a className="contact-detail" href="tel:+49 9086 4577209">
                    <div className="contact-icon-wrapper">
                        <IoIosCall className="contact-icon" />
                    </div>
                    <span className="contact-text">+49 9086 4577209</span>
                </a>
                <a
                    target="_blank"
                    className="contact-detail contact-email"
                    href="mailto:registration@uni-siegen.de"
                >
                    <div className="contact-icon-wrapper">
                        <MdEmail className="contact-icon" />
                    </div>
                    <span className="contact-text">registration@uni-siegen.de</span>
                </a>
            </div>
            <div className="divider"></div>
            <div className="tth-data-wrapper">
                <p className="tth-info-text">
                {t("talk2human.write")}
                </p>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label={t("talk2human.message")}
                    className="tth-message"
                >
                    <Form.Control
                        as="textarea"
                        placeholder={t("talk2human.message")}
                        style={{ height: "90px" }}
                    />
                </FloatingLabel>
                <Form.Check
                    name="send-chat-details"
                    aria-label="Send chat details"
                    label={t("talk2human.send")}
                    defaultChecked
                />
                <div className="contact-email">
                    <p className="tth-info-text">
                    {t("talk2human.please")}
                    </p>
                    <Form.Check
                        type="radio"
                        name="email-address"
                        checked={useSavedEmail}
                        onClick={() => setUseSavedEmail(true)}
                        label={
                            <Fragment>
                                {t("talk2human.use")}{" "}
                                <span className="email-address-saved">
                                    somebody.nobody@example.com
                                </span>
                            </Fragment>
                        }
                    />
                    <Form.Check
                        type="radio"
                        name="email-address"
                        checked={!useSavedEmail}
                        onClick={() => setUseSavedEmail(false)}
                        label={t("talk2human.different")}
                    />
                    <Form.Control
                        type="text"
                        placeholder={t("talk2human.email")}
                        disabled={useSavedEmail}
                    />
                </div>
                <div className="contact-email">
                    <p className="tth-info-text">{t("talk2human.would")}</p>
                    <Form.Control
                        type="tel"
                        onChange={(e) => setPhoneInput(e.target.value)}
                        value={phoneInput}
                        placeholder={t("talk2human.number")}
                    />
                    {phoneInput.trim() !== "" && (
                        <div className="day-time-input-wrapper">
                            <p className="tth-info-text">{t("talk2human.best")}</p>
                            <div className="day-wrapper">
                                {DAYS.map((day) => (
                                    <span
                                        className={`day-select ${
                                            preferredDayTime.day === day ? "day-selected" : ""
                                        }`}
                                        onClick={() =>
                                            setPreferredDayTime({ ...preferredDayTime, day })
                                        }
                                    >
                                        {day}
                                    </span>
                                ))}
                            </div>
                            <Form.Control
                                type="time"
                                value={preferredDayTime.time}
                                onChange={(e) =>
                                    setPreferredDayTime({
                                        ...preferredDayTime,
                                        time: e.target.value,
                                    })
                                }
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TalkToHuman;
