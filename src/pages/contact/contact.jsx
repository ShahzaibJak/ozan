import transition from "../../transition"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe, faMapLocation } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion";
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_iq7y2xc', 'template_oowdrth', form.current, 'wr-GucdLwbadPhCZf')
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent!")
            }, (error) => {
                console.log(error.text);
                toast.error("Error sending message. Try later")
            });
    };



    return (
        <div className="contact">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75 }}
            >
                <div className="contact-card">
                    <div className="contact-info">
                        <p>Got something we can help you with?<br></br><b>Reach Out!</b></p>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faWhatsapp} style={{ width: '35px', height: '35px' }} fill="#4CAF50" /> <b>+92-371-7625917</b>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faEnvelope} style={{ width: '35px', height: '35px' }} /> <b>support@ozan.com</b>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faGlobe} style={{ width: '35px', height: '35px' }} /> <b>www.ozanre.com</b>
                        </div>
                        <div className="info-item">
                            <FontAwesomeIcon icon={faMapLocation} style={{ width: '35px', height: '35px' }} /> <b>Sample Address</b>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <h1>Send us a message!</h1>

                        <div className="contact-item">
                            <input type="text" placeholder="Your Full Name..." name="user_name" required />
                        </div>

                        <div className="contact-item">
                            <input type="email" placeholder="Your Email..." name="user_email" required />
                        </div>

                        <div className="contact-item">
                            <textarea placeholder="What can we help you with...." name="message" />
                        </div>

                        <div className="contact-item">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default transition(Contact)