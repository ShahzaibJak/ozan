import transition from "../../transition"
import { motion } from "framer-motion"
const Home = () => {
    return (
        <div className="home">
            <div className="full-screen flex-col white">
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Ozan</h1>
                    <p>Hi, We are Ozan. The leading real estate firm</p>
                </motion.div>
            </div>
            <div className="full-screen flex-col white">
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: -600 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Ozan</h1>
                    <p>Hi, We are Ozan. The leading real estate firm</p>
                </motion.div>
            </div>
        </div>
    )
}

export default transition(Home)