import React, { useEffect, useState } from "react";
import DeveloperAddNewStore from "../DeveloperEditStore";
import DeveloperEditStore from "../DeveloperEditStore";
import StoreArray from "./StoreArray";
import { useQuery } from "@apollo/client";
import { QUERY_DEVELOPER } from "../../utils/queries";

// import MallArray from './MallArray';

function DeveloperSingleMall(mallSelected) {
  const { mallName, style, location, stores } = mallSelected;

  const storeList = [
    // {
    //   storeName: "Ram",
    //   category: "indoor",
    //   description: "portland",
    //   url: "urlhere"
    // },
  ];

  console.log("whats inside?", storeList.length);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const editStore = (index, store) => {
    return (
      <div key={index}>
        <DeveloperEditStore {...store} />
      </div>
    );
  };

  return (
    <>
      {isModalOpen && <DeveloperAddNewStore onClose={toggleModal} />}
      <div className="my-2">
        {/* for testing only need to delete and uncomment commented out part once testing is complete */}
        {storeList.length > 0 ? (
          // {mallSelected.length > 0 ? (
          <div>
            <div>
              <h2>{mallName}</h2>
              <p>Mall Style: {style}</p>
              <p>Location: {location}</p>
            </div>

            <ul className="flex-row">
              {storeList.map((store, index) => (
                <li key={index} onClick={() => editStore(store, index)}>
                  <StoreArray {...store} />
                </li>
              ))}
            </ul>
        </div>
        ) : (
          <h3>Your mall doesn't have any stores yet!</h3>
        )}
        <button onClick={() => toggleModal()}>Add New store</button>
      </div>
    </>
  );
}

export default DeveloperSingleMall;
