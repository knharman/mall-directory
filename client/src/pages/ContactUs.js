import React from "react";
import Auth from '../utils/auth';
import AppNavbar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactUs = () => {
    return (
        <>
            <AppNavbar />
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactUs;