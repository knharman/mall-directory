import React, { useEffect, useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import MallArray from './MallArray';
import DeveloperStoreList from '../DeveloperStoreList'
import { GET_DEVELOPER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function DeveloperMallList() {
  const {loading, data, error} = useQuery(GET_DEVELOPER)
  const [selectedMall, setSelectedMall] = useState("")
  const [stores, setStores] = useState([])



  if (data) console.log(data);
  if (error) console.log(error)


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

  const handleMallClick = (stores, mallName) => {
    console.log("stores", stores)
    setStores(stores)
    setSelectedMall(mallName)
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
      <div className="my-5 sidenav" lg={12}>
        <h2 className='mall-list-title'>Malls:</h2>
        {data && data.developer.malls.length > 0 ? (

          <ol className="flex-row">
            {data && data.developer.malls.map((mall, index) => (
              <li key={index} >
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

<DeveloperStoreList stores={stores == null ? [] : stores} mallName={selectedMall}/>
    

      </div>
    </>
  );
}

export default DeveloperMallList;
