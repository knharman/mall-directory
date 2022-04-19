import React from "react";
import CustomerStoreList from "../components/CustomerStoreList";
import CustomerMallList from "../components/CustomerMallList";
import AppNavbar from "../components/NavBar";
import CustomerStoreModal from "../components/CustomerStoreModal";
import Footer from "../components/Footer";

const CustomerHome = () => {
    return (
        <>
        <AppNavbar />
        <CustomerMallList />
        {/* <CustomerStoreList /> */}
        {/* <CustomerStoreModal /> */}
        <Footer />
        </>
    )
};

export default CustomerHome;


