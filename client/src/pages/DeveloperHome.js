import React from "react";
import Auth from "../utils/auth";
import { Redirect } from 'react-router-dom';
import AppNavbar from "../components/NavBar";
import DeveloperMallList from "../components/DeveloperMallList";
import DeveloperSingleMall from "../components/DeveloperSingleMall";
import DeveloperAddNewStore from "../components/DeveloperAddNewStore";
import Footer from "../components/Footer";

const DeveloperHome = () => {
    return (
        <>
            {Auth.loggedIn() ? (
                <>
                    <AppNavbar />
                    <DeveloperMallList />
                    <DeveloperSingleMall />
                    {/* <DeveloperAddNewStore /> */}
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