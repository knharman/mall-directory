import React from "react";
import CustomerStoreList from "../components/CustomerStoreList";
import CustomerMallList from "../components/CustomerMallList";
import AppNavbar from "../components/NavBar";
import CustomerStoreModal from "../components/CustomerStoreModal";
import DeveloperMallList from "../components/DeveloperMallList";

const CustomerHome = () => {
    return (
        <>
        {/* <AppNavbar />
        <CustomerStoreModal />
        <CustomerMallList />
        <CustomerStoreList /> */}
        <DeveloperMallList />
        </>
    )
};

export default CustomerHome;


