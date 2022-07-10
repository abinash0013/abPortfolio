import React from "react";
import "./Brands.css";
import brandIcon1 from "./../../Images/Group 16.png";
import brandIcon2 from "./../../Images/Group 17.png";
import brandIcon3 from "./../../Images/Group 19.png";
import brandIcon4 from "./../../Images/Group 18.png";
import brandIcon5 from "./../../Images/Group 20.png";
import brandIcon6 from "./../../Images/Group 15.png";
import brandIcon7 from "./../../Images/Group 14.png";
import { motion } from "framer-motion";

const Brands = () => {
    const transaction = { duration: 2, type: "spring" };
    const Brands = [
        { brandIcon: brandIcon1 },
        { brandIcon: brandIcon2 },
        { brandIcon: brandIcon3 },
        { brandIcon: brandIcon4 },
        { brandIcon: brandIcon5 },
        { brandIcon: brandIcon6 },
        { brandIcon: brandIcon7 },
    ];
    return (
        <div className="brands" id="brands">
            <div className="max-width">
                <motion.h2
                    className="title"
                    initial={{ left: "-30%" }}
                    transaction={{ transaction }}
                    whileInView={{ left: "0%" }}
                >
                    Brands Works
                </motion.h2>
                <div className="brands-content">
                    {Brands.map((Brands, index) => {
                        return (
                            <div className="brands-card">
                                <img src={Brands.brandIcon} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Brands;
