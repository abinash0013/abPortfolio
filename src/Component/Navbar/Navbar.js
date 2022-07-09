import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
    const [hiddenMenu, setHiddenMenu] = useState(false);
    return (
        <nav className="navbar">
            <motion.div
                className="max-width"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
            >
                <div className="logo">
                    <Link to="#">
                        Portfo<span>lio.</span>
                    </Link>
                </div>
                <ul className={(hiddenMenu ? "active" : "") + " menu"}>
                    <li>
                        <Link
                            smooth={true}
                            duration={1000}
                            to="home"
                            className="menu-btn"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            duration={1000}
                            to="about"
                            className="menu-btn"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            duration={1000}
                            to="project"
                            className="menu-btn"
                        >
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            duration={1000}
                            to="skills"
                            className="menu-btn"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            duration={1000}
                            to="feedback"
                            className="menu-btn"
                        >
                            Feedback
                        </Link>
                    </li>
                    <li>
                        <Link
                            smooth={true}
                            duration={1000}
                            to="contact"
                            className="menu-btn"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="menu-btn">
                    <i className="fas">
                        <span onClick={() => setHiddenMenu(!hiddenMenu)}>
                            {hiddenMenu ? <FaTimes /> : <FaBars />}
                        </span>
                    </i>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
