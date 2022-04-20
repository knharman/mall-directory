import React, { useEffect, useState } from 'react';
import '../style.css';
import DeveloperEditStore from '../../DeveloperEditStore'



function StoreArray({ storeName, description, category, url }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
      <>
    {/* {isModalOpen && (
        <DeveloperEditStore onClose={toggleModal} />
      )} */}
      <div className="my-2">
          <h4>{storeName}</h4>
          <ul>
              <li>{category}</li>
              <li>{description}</li>
              <li>{url}</li>
          </ul>
          <button onClick={() => toggleModal()}>Edit</button>
      </div>
      </>
  );
}

export default StoreArray;

