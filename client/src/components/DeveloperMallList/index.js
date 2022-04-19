import React, { useEffect, useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import MallArray from './MallArray';
import { GET_DEVELOPER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function DeveloperMallList() {
  // const {malls} = useQuery(GET_DEVELOPER)
  const malls = [
    {
      mallName: "Ram",
      style: "indoor", 
      location: "portland"
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
    </>
  );
}

export default DeveloperMallList;
