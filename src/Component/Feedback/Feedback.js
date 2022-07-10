import React from "react";
import "./Feedback.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Profile from "./../../Images/profile.png";
import QuotationMark from "./../../Images/quotations.png";
import { motion } from "framer-motion";

const Feedback = () => {
    const transition = { duration: 2, type: "spring" };

    const clients = [
        {
            img: Profile,
            clientName: "Anil Kumar",
            projectName: "Excellent Coachings",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ullam impedit unde a atque inventore!",
        },
        {
            img: Profile,
            clientName: "Vikas Kumar",
            projectName: "Delhi Golden Lottery",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ullam impedit unde a atque inventore!",
        },
        {
            img: Profile,
            clientName: "Abinash Sonar",
            projectName: "Fitness Freak",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ullam impedit unde a atque inventore!",
        },
        {
            img: Profile,
            clientName: "Ajit Singh",
            projectName: "Nitish Srans Seva",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ullam impedit unde a atque inventore!",
        },
    ];
    return (
        <div className="feedback" id="feedback">
            <div className="max-width">
                <motion.h2
                    className="title"
                    initial={{ left: "-30%" }}
                    transition={{ transition }}
                    whileInView={{ left: "0%" }}
                >
                    Feedback
                </motion.h2>
                <motion.div
                    className="carousel"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                >
                    <Swiper
                        slidesPerView={1}
                        grabCursor={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {clients.map((client, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="card">
                                        <div className="box">
                                            <img
                                                src={client.img}
                                                alt="img_one"
                                                srcset=""
                                                className="img"
                                            />
                                            <h4 className="projectName">
                                                {client.projectName}
                                            </h4>
                                            <h2 className="text">
                                                {client.clientName}
                                            </h2>
                                            <p>
                                                <img
                                                    src={QuotationMark}
                                                    alt=""
                                                    classNameName="quotationSistysix"
                                                />
                                                {client.projectDescription}
                                                <img
                                                    src={QuotationMark}
                                                    alt=""
                                                    classNameName="quotationNintynine"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
};

export default Feedback;
