import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFillDrip, FaDesktop, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
    const transaction = { duration: 5, type: "tween" };
    const Services = [
        {
            servicesIcon: <FaFillDrip />,
            serviceName: "Designing",
            serviceDescription:
                "Converting / Creating Pixel Perfect design and layout of a website.",
        },
        {
            servicesIcon: <FaDesktop />,
            serviceName: "Development",
            serviceDescription:
                "Giving best User Experience as per the requirement and satisfying the end-users",
        },
        {
            servicesIcon: <FaCogs />,
            serviceName: "Maintenance",
            serviceDescription:
                "Providing 6 Month Free Maintenance overall health, performance and etc.",
        },
    ];
    return (
        <div className="services" id="servicesId">
            <div className="max-width">
                <motion.h2
                    className="title"
                    initial={{ left: "-30%" }}
                    transaction={{ transaction }}
                    whileInView={{ left: "0%" }}
                >
                    Services
                </motion.h2>
                <motion.div
                    className="carousel-services"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                >
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        grabCursor={true}
                    >
                        {Services.map((Services, index) => {
                            return (
                                <SwiperSlide className="card" key={index}>
                                    <div className="box">
                                        <i className="servIcon">
                                            {Services.servicesIcon}
                                        </i>
                                        <div className="text">
                                            {Services.serviceName}
                                        </div>
                                        <p>{Services.serviceDescription}</p>
                                        <div className="button-section">
                                            <button className="miniButton">
                                                Details
                                            </button>
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

export default Services;
