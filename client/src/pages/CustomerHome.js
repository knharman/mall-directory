import React from "react";

import CustomerStoreList from "../components/CustomerStoreList";
import AppNavbar from "../components/NavBar";
import CustomerStoreModal from "../components/CustomerStoreModal";

const CustomerHome = () => {
    return (
        <>
        <AppNavbar />
        <CustomerStoreModal />
        <CustomerStoreList />
        </>
    )
};

export default CustomerHome;


