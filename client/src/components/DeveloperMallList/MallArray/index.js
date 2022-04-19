import React, { useEffect, useState } from 'react';
import '../style.css'
import DeveloperStoreList from '../../DeveloperStoreList';

function MallArray({ mallName, style, location }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <>
    {isModalOpen && (
    <DeveloperStoreList onClose={toggleModal} />
  )}
      <div className="my-2">
          <h4  onClick={() => toggleModal()}>{mallName}</h4>
          <ul>
              <li>{location}</li>
              <li>{style}</li>
          </ul>
      </div>
      </>
  );
}

export default MallArray;

