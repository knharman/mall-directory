import React from "react";
import Auth from "../utils/auth";
import { Redirect } from "react-router-dom";
import AppNavbar from "../components/NavBar";
import DeveloperLoginForm from "../components/DeveloperLoginForm";
import Footer from "../components/Footer";

const DeveloperLogin = () => {
    return (
        <>
            {Auth.loggedIn() ? (
                <>
                    <Redirect to="/dashboard" />
                </>
            ) : (
                <>
                    <AppNavbar />
                    <DeveloperLoginForm />
                    <Footer />
                </>
            )
            }
        </>
    )
};

export default DeveloperLogin;