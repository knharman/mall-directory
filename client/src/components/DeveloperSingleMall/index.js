import React, { useEffect, useState } from "react";
import DeveloperAddNewMall from "../DeveloperAddNewMall";
import { useQuery } from "@apollo/client";
import { QUERY_DEVELOPER } from "../../utils/queries";

// import MallArray from './MallArray';

function DeveloperSingleMall(mallSelected) {
  const { mallName, style, location, stores } = mallSelected;

  const mallList = [
    // ************ uncomment below to get data for map function ***********
    //     {
    //     mallName: "Ram",
    //       age: "20"
    // }
  ];

  console.log("whats inside?", mallList.length);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (addNewMall) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <DeveloperAddNewMall onClose={toggleModal} />}
      <div className="my-2">
        <div>
          <h2>{mallName}</h2>
          <p>Mall Style: {style}</p>
          <p>Location: {location}</p>
        </div>

        {stores.length > 0 ? (
          // ************* Here is where it breaks **************
          <ul className="flex-row">
            {mallList().map((mall, index) => (
              <li>
                {/* TODO: add function to generate Single Mall with all Stores View. */}
                {mall[index].mallName}
              </li>
            ))}
          </ul>
        ) : (
          // ************* Good after this point **************

          <h3>You haven't added any malls yet!</h3>
        )}
        <button onClick={() => toggleModal()}>Add New MAll</button>
      </div>
    </>
  );
}

export default DeveloperSingleMall;
