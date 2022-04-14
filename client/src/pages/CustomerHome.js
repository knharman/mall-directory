import React from "react";
import CustomerStoreList from "../components/CustomerStoreList";
import CustomerMallList from "../components/CustomerMallList";

const CustomerHome = () => {
    return (
      <>
        <CustomerMallList />
        <CustomerStoreList />
        </>
    )
}

export default CustomerHome;