import React, { useEffect, useState } from 'react';
import DeveloperAddNewStore from '../DeveloperAddNewStore'
import DeveloperEditStore from '../DeveloperEditStore'
import StoreArray from './StoreArray';
import { GET_DEVELOPER } from '../../utils/queries';

function DeveloperStoreList() {

  const storeList = [
    {
      storeName: "Subway",
      category: "food", 
      description: "sandwich",
      url: "http://google.com/"
    },
    {
      storeName: "nike",
      category: "clothing", 
      description: "Apparel",
      url: "http://google.com/"
    },
    {
      storeName: "Ram",
      category: "FAMILY", 
      description: "portland",
      url: "http://google.com/"
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <DeveloperAddNewStore onClose={toggleModal} />
      )}
      <div className="center">
        <h2>Stores:</h2>
        {storeList.length > 0 ? (

          <ul className="">
            {storeList.map((store, index) => (
              <li key={index}>
                <StoreArray {...store} />
              </li>
            ))}
          </ul>
        ) : (
          <h3>You haven't added any stores yet!</h3>
        )}
        <button onClick={() => toggleModal()}>
          Add New Store
        </button>
      </div>
      <div>
        <DeveloperEditStore />
      </div>
    </>
  );
}

export default DeveloperStoreList;