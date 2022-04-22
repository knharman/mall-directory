import React from "react";
import Auth from "../utils/auth";
import { Redirect } from 'react-router-dom';
import AppNavbar from "../components/NavBar";
import DeveloperMallList from "../components/DeveloperMallList";
import Footer from "../components/Footer";

const DeveloperHome = () => {
    return (
        <>
            {Auth.loggedIn() ? (
                <>
                    <AppNavbar />
                    <div><DeveloperMallList /></div>
                    <Footer />
                </>
            ) : (
                <>
                    <Redirect to="/login" />
                </>
            )
            }
        </>
    )
};

export default DeveloperHome;