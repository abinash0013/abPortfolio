import React from "react";
import "./Contact.css";
import { Link } from "react-scroll";
import User from "@iconscout/react-unicons/icons/uil-user";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Address from "@iconscout/react-unicons/icons/uil-map-marker";
import { motion } from "framer-motion";

const Contact = () => {
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="contact" id="contact">
            <div className="max-width">
                <motion.h2
                    className="title"
                    initial={{ left: "-30%" }}
                    transition={{ transition }}
                    whileInView={{ left: "0%" }}
                >
                    Contact Me
                </motion.h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>
                            I love to share my expertise with you. Please feel
                            free to Fill up the the given form along with your
                            Quotation.
                        </p>
                        <div className="icons">
                            <div className="row">
                                <User className="fas" />
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">
                                        Abinash Sonar
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Email className="fas" />
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">
                                        abinash261997@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Address className="fas" />
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">
                                        Bomdila Arunachal Pradesh(790001)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text" id="hireMe">
                            Message Me
                        </div>
                        <form action="https://formspree.io/f/xnqrvnnq" method="POST">
                            <div className="fields">
                                <div className="field name">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Name"
                                        required
                                    />
                                </div>
                                <div className="field email">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field phone">
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter Phone Number"
                                    required
                                />
                            </div>
                            <div className="field subject">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter Subject"
                                    required
                                />
                            </div>
                            <div className="field textarea">
                                <textarea
                                    cols="30"
                                    rows="10"
                                    placeholder="Describe Project..."
                                    required
                                ></textarea>
                            </div>
                            <div className="button">
                                <input type="submit" className="mainButton" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
