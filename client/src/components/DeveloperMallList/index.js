import React, { useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import MallArray from './MallArray';
import DeveloperStoreList from '../DeveloperStoreList'
import { GET_DEVELOPER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function DeveloperMallList() {
  const { data } = useQuery(GET_DEVELOPER)
  const [selectedMall, setSelectedMall] = useState("")
  const [selectedMallId, setSelectedMallId] = useState("")
  const [stores, setStores] = useState([])

  const handleMallClick = (stores, mallName, mallId) => {
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
