import React from "react";
import "./Project.css";
import excellentProjectImage from "./../../Images/ex.png";
import lotteryProjectImage from "./../../Images/delhi-golden-lot.png";
import FitnessProjectImage from "./../../Images/Fitness.png";
import portfolioProjectImage from "./../../Images/my-portfolio.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { motion } from "framer-motion";

const Project = () => {
    const projects = [
        {
            projectImg: excellentProjectImage,
            projectName: "Excellent Coachings",
            projectDescription:
                "Excellent Coachings is one of the leading coaching institutes providing premium quality education to any competitive exams aspirants.",
            projectLink: "https://excellentcoachings.com/",
            projectCode: "https://github.com/abinash0013/exam",
        },
        {
            projectImg: lotteryProjectImage,
            projectName: "Delhi Golden Lottery",
            projectDescription:
                "It is a lottery Website where the User can choose one number if a user wins by its lucky number it is double the amount.",
            projectLink: "https://delhi-golden-lottery.herokuapp.com/",
            projectCode: "https://github.com/abinash0013/react-delhi",
        },
        {
            projectImg: FitnessProjectImage,
            projectName: "Fitness Freak",
            projectDescription:
                "This is a simple and Informative Fitness Website creating for the purpose of Learning and practicing of React Js.",
            projectLink: "https://reactjs-gym.herokuapp.com",
            projectCode: "https://github.com/abinash0013/gym",
        },
        // {
        //     projectImg: lotteryProjectImage,
        //     projectName: "Nitish Srans Seva",
        //     projectDescription:
        //         "This is an NGO Website created for the purpose of stepping forward to help every people in the village facing various Problem.",
        //     projectLink: "http://www.nitishsransseva.com",
        //     projectCode: "https://github.com/abinash0013/Nitihs-srans-seva",
        // },
        {
            projectImg: portfolioProjectImage,
            projectName: "My Portfolio",
            projectDescription:
                "It is my personal Portfolio Website Where I can showcase my all work, skill, and services that I have Provided till now.",
            projectLink: "https://github.com/abinash0013/abportfolio",
            projectCode: "https://abinashsonar.netlify.app/",
        },
    ];
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="project" id="project">
            <div className="max-width">
                <motion.h2
                    className="title"
                    initial={{ left: "-30%" }}
                    transition={{ transition }}
                    whileInView={{ left: "0%" }}
                >
                    Project
                </motion.h2>
                <div className="carousel-project">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        grabCursor={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="carousel-project"
                    >
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide className="card" key={index}>
                                    <div className="box">
                                        <img
                                            src={project.projectImg}
                                            alt=""
                                            className="projectImages"
                                        />
                                        <div className="text">
                                            {project.projectName}
                                        </div>
                                        <p>{project.projectDescription}</p>
                                        <div className="button-section">
                                            <a
                                                href={project.projectLink}
                                                // target="_blank"
                                                target="noopener"
                                                className="miniButton"
                                            >
                                                Visit Website
                                            </a>
                                            <a
                                                href={project.projectCode}
                                                // target="_blank"
                                                target="noopener"
                                                className="miniButton"
                                            >
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Project;
