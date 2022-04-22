import React from "react";
import CustomerMallList from "../components/CustomerMallList";
import AppNavbar from "../components/NavBar";
import Footer from "../components/Footer";

const CustomerHome = () => {
    return (
        <>
        <AppNavbar />
        <CustomerMallList />
        <Footer />
        </>
    )
};

export default CustomerHome;