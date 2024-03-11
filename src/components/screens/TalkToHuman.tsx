import { ERoute, useData } from "hooks";

import { FC, Fragment, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
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

    return (
        <div className="talkToHuman-wrapper">
            <div className="navbar">
                <button className="navBackBtn" onClick={() => setCurrentRoute(ERoute.MAIN)}>
                    <IoChevronBack className="navIcon" />
                    <span className="navText">Back</span>
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
                    Write a message to Central Student Advisory Service:
                </p>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Your message"
                    className="tth-message"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Your message..."
                        style={{ height: "90px" }}
                    />
                </FloatingLabel>
                <Form.Check
                    name="send-chat-details"
                    aria-label="Send chat details"
                    label="Send chat details"
                    defaultChecked
                />
                <div className="contact-email">
                    <p className="tth-info-text">
                        Please leave an email that the ZSB can use to contact you:
                    </p>
                    <Form.Check
                        type="radio"
                        name="email-address"
                        checked={useSavedEmail}
                        onClick={() => setUseSavedEmail(true)}
                        label={
                            <Fragment>
                                Use saved email id{" "}
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
                        label="Use a different email address"
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter email address"
                        disabled={useSavedEmail}
                    />
                </div>
                <div className="contact-email">
                    <p className="tth-info-text">Would you like to be called with the answer?</p>
                    <Form.Control
                        type="tel"
                        onChange={(e) => setPhoneInput(e.target.value)}
                        value={phoneInput}
                        placeholder="Enter contact number"
                    />
                    {phoneInput.trim() !== "" && (
                        <div className="day-time-input-wrapper">
                            <p className="tth-info-text">What is the best time to call you?</p>
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
