import React from "react";
import Auth from "../utils/auth";
import { Redirect } from 'react-router-dom';
import AppNavbar from "../components/NavBar";
import DeveloperMallList from "../components/DeveloperMallList";
import DeveloperSingleMall from "../components/DeveloperSingleMall";
import Footer from "../components/Footer";
import DeveloperAddNewMall from "../components/DeveloperAddNewMall";
import DeveloperAddNewStore from "../components/DeveloperAddNewStore";
// import DeveloperEditStore from "../components/DeveloperEditStore"

const DeveloperHome = () => {
    return (
        <>
            {Auth.loggedIn() ? (
                <>
                    <AppNavbar />
                    <DeveloperMallList />
                    {/* <DeveloperAddNewMall /> */}
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