import React, { useState } from "react";
import "../style.css";
import DeveloperEditStore from "../../DeveloperEditStore";

function StoreArray({ storeName, description, category, url, clickHandler }) {
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
        <button className='mall-list-button3' onClick={clickHandler}>Edit</button>
      </div>
    </>
  );
}

export default StoreArray;