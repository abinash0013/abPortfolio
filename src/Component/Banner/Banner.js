import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="home" id="home">
            <div className="max-width">
                <motion.div
                    className="home-content"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                >
                    <div className="text-1">Hello.</div>
                    <div className="text-2">
                        I am <span className="name">Abinash Sonar</span>
                    </div>
                    <div className="text-3">
                        and I'm
                        <span className="typedEffect">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Fullstack Developer",
                                        "Part-Time Developer",
                                        "Full-Time Developer",
                                        "Freelancer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <br />
                    <Link to="contact" smooth={true} duration={1000} className="mainButton">
                        Hire Me
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
