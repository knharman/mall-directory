import React, { useEffect, useState } from "react";
import "../style.css";
import DeveloperEditStore from "../../DeveloperEditStore";

function StoreArray({ storeName, description, category, url, clickHandler }) {
  // console.log("store name on store array", category);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal2 = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <DeveloperEditStore onClose={toggleModal2} />}
      <div className="my-2">
        <h4>{storeName}</h4>
        <ul>
          <li>Category: {category.name}</li>
          <li>Description: {description}</li>
          <li>URL: {url}</li>
        </ul>
        <button onClick={clickHandler}>Edit</button>
      </div>
    </>
  );
}

export default StoreArray;
