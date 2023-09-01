import transition  from "../../transition"
import { motion } from "framer-motion";
const About = () =>{
    return (
        <div className="about">
            <div className="full-screen flex-col white">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.5 }}
                    >
                    <h1>About Us</h1>
                    <p>Hi, We are Ozan. The leading real estate firm</p>
                </motion.div>
            </div>
        </div>
    )
};

export default transition(About)