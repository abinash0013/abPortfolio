import React from "react";
// import { Link } from "react-scroll";
import "./About.css";
import Typewiter from "typewriter-effect";
import profileImage from "./../../Images/profile.png";
import Resume from "./../../Resume/Abinash-Resume-2022.pdf";
import { motion } from "framer-motion";

const About = () => {
    const transition = { duration: 10, type: "spring" };
    return (
        <div className="about" id="about">
            <div className="max-width">
                <motion.h2
                    className="title"
                    initial={{ left: "-30%" }}
                    transition={{ transition }}
                    whileInView={{ left: "0%" }}
                >
                    About Us
                </motion.h2>
                <div className="about-content">
                    <div className="column left">
                        <motion.img
                            src={profileImage}
                            alt="profile images"
                            srcset=""
                            whileInView={{ scale: 1 }}
                            initial={{ scale: 0 }}
                        />
                    </div>
                    <div className="column right">
                        <div className="text">
                            Hello 🙏
                            <span className="typedEffect">
                                <Typewiter
                                    options={{
                                        strings: ["I am Abinash Sonar"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <p>
                            and I am a <span>Web Developer</span> having{" "}
                            <span>1+ Year</span> of Experience in{" "}
                            <span>Web Development</span> and{" "}
                            <span>Designing.</span> I develop a full-blown{" "}
                            <span>website</span> & <span>web application,</span>{" "}
                            according to requirements that meet the best user
                            experience and top notch functionality using
                            Trending Technology on the market. <br />
                            <br />
                        </p>
                        <p>
                            I love to Work both <span>Frontend</span> and
                            <span> backend.</span> I have mentioned all the
                            projects in the project section you may check the
                            following links.
                        </p>
                        <div className="button-section">
//                             <Link to={Resume} className="mainButton">
//                                 Download CV
//                             </Link>
                            <a
                                href={Resume}
                                className="mainButton"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
