import React, { useEffect, useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import MallArray from './MallArray';
import DeveloperStoreList from '../DeveloperStoreList'
import { GET_DEVELOPER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function DeveloperMallList() {
  const {loading, data, error} = useQuery(GET_DEVELOPER)


  console.log("data", data)
  
  const malls = [
    {
      mallName: "Ram",
      style: "indoor", 
      location: "portland",
      stores: [    {
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
      }]
    },
    {
      mallName: "Galleria",
      style: "outdoor", 
      location: "Anaheim"
    },
    {
      mallName: "Mainplace",
      style: "indoor", 
      location: "Garden Grove"
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <DeveloperAddNewMall onClose={toggleModal} />
      )}
      <div className="my-2 sidenav">
        <h2>Malls:</h2>
        {malls.length > 0 ? (

          <ul className="flex-row">
            {malls.map((mall, index) => (
              <li key={index}>
                <MallArray {...mall} />
              </li>
            ))}
          </ul>
        ) : (
          <h3>You haven't added any malls yet!</h3>
        )}
        <button onClick={() => toggleModal()}>
          Add New Mall
        </button>
      </div>
      <div>

    

      </div>
    </>
  );
}

export default DeveloperMallList;
