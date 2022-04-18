import React, { useEffect, useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import MallArray from './MallArray';
import { useQuery } from '@apollo/client';
import { GET_DEVELOPER } from '../../utils/queries';

function DeveloperMallList() {



  // ***********   Can you also look over make sure what I have commented out will return the right info for mall list?  ********
  // ***********  I want mall list to look like the hard code example I have below when I uncomment it. **********
    const { loading, data } = useQuery(GET_DEVELOPER);
    console.log("whats inside data ?", data)
    const mallList = data.malls;
  console.log("whats inside?", mallList)

//   const mallList = [
//     {
//       mallName: "Ram",
//       style: "indoor", 
//       location: "portland"
//     },
//     {
//       mallName: "Galleria",
//       style: "outdoor", 
//       location: "Anaheim"
//     },
//     {
//       mallName: "Mainplace",
//       style: "indoor", 
//       location: "Garden Grove"
//     }
//   ]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <DeveloperAddNewMall onClose={toggleModal} />
      )}
      <div className="my-2">
        <h2>Malls:</h2>
        {mallList.length > 0 ? (

          <ul className="flex-row">
            {mallList.map((mall, index) => (
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
