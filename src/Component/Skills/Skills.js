import React from "react";
import { Link } from "react-scroll";
import "./Skills.css";
import { motion } from "framer-motion";
// import skillImage from "./../../Images/skillImage.png";
import skillImage from "./../../Images/skill.png";

const Skills = () => {
    const transaction = { duration: 2, type: "spring" };
    return (
        <div class="skills" id="skills">
            <div class="max-width">
                <motion.h2
                    class="title"
                    initial={{ left: "-30%" }}
                    transaction={{ transaction }}
                    whileInView={{ left: "0%" }}
                >
                    My Skills
                </motion.h2>
                <div class="skills-content">
                    <div class="column right">
                        <div class="bars">
                            <div class="info">
                                <span>HTML</span>
                                <span>80%</span>
                            </div>
                            <div class="line html"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>CSS</span>
                                <span>70%</span>
                            </div>
                            <div class="line css"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Javascript</span>
                                <span>60%</span>
                            </div>
                            <div class="line javascript"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>React Js</span>
                                <span>60%</span>
                            </div>
                            <div class="line reactjs"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>PHP & MySql</span>
                                <span>70%</span>
                            </div>
                            <div class="line php-mysql"></div>
                        </div>
                        {/* <div class="bars">
                            <div class="info">
                                <span>Node Js & Mongo</span>
                                <span>40%</span>
                            </div>
                            <div class="line node-mongo"></div>
                        </div> */}
                    </div>
                    <div class="column left">
                        {/* <div class="text">My Skills & Experiences.</div> */}
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis cum optio, rem asperiores at veniam
                            quas in quaerat neque accusamus maxime quibusdam.
                            Officia necessitatibus fuga eius officiis maiores
                            soluta, sequi possimus harum voluptate aut neque
                            consequatur, reiciendis deserunt veniam quos culpa
                            laudantium optio sapiente! Ipsum sed harum repellat,
                            eveniet itaque quisquam incidunt consequatur
                            consectetur! Distinctio vel facere rem magnam natus!
                        </p> */}
                        <motion.img
                            src={skillImage}
                            alt=""
                            srcset=""
                            whileInView={{ scale: 1 }}
                            initial={{ scale: 0 }}
                        />
                        {/* <div className="button-section">
                            <Link to="#" className="mainButton">
                                Read More
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
