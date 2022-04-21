import React, { useEffect, useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import MallArray from './MallArray';
import DeveloperStoreList from '../DeveloperStoreList'
import { GET_DEVELOPER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function DeveloperMallList() {
  const { loading, data, error } = useQuery(GET_DEVELOPER)
  const [selectedMall, setSelectedMall] = useState("")
  const [selectedMallId, setSelectedMallId] = useState("")
  const [stores, setStores] = useState([])

  console.log("selectedMall", selectedMall)
  console.log("selectedMallId", selectedMallId)

  // if (data) console.log(data);
  // if (error) console.log(error)


  // const malls = [
  //   {
  //     mallName: "Ram",
  //     style: "indoor", 
  //     location: "portland",
  //     stores: [    {
  //       storeName: "Subway",
  //       category: "food", 
  //       description: "sandwich",
  //       url: "http://google.com/"
  //     },
  //     {
  //       storeName: "nike",
  //       category: "clothing", 
  //       description: "Apparel",
  //       url: "http://google.com/"
  //     },
  //     {
  //       storeName: "Ram",
  //       category: "FAMILY", 
  //       description: "portland",
  //       url: "http://google.com/"
  //     }]
  //   },
  //   {
  //     mallName: "Galleria",
  //     style: "outdoor", 
  //     location: "Anaheim"
  //   },
  //   {
  //     mallName: "Mainplace",
  //     style: "indoor", 
  //     location: "Garden Grove"
  //   }
  // ]

  const handleMallClick = (stores, mallName, mallId) => {
    // console.log("stores", stores)
    console.log("handleMallCLick", mallName, mallId)
    setStores(stores)
    setSelectedMall(mallName)
    setSelectedMallId(mallId)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <DeveloperAddNewMall onClose={toggleModal} />
      )}
      <div className="my-5 marginAdjust sidenav" lg={12}>
        <h2 className='mall-list-title'>Malls:</h2>
        {data && data.developer.malls.length > 0 ? (

          <ol className="flex-row">
            {data && data.developer.malls.map((mall) => (
              <li key={mall._id} >
                <MallArray {...mall} clickHandler={handleMallClick} />
              </li>
            ))}
          </ol>
        ) : (
          <h3>You haven't added any malls yet!</h3>
        )}
        <button className='mall-list-button' onClick={() => toggleModal()}>
          Add New Mall
        </button>
      </div>
      <div>

        <DeveloperStoreList stores={stores == null ? [] : stores} mallName={selectedMall} mallId={selectedMallId} />


      </div>
    </>
  );
}

export default DeveloperMallList;
