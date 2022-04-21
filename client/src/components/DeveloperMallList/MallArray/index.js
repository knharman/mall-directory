import React, { useEffect, useState } from 'react';
import '../style.css'
import DeveloperStoreList from '../../DeveloperStoreList';

function MallArray({ _id, mallName, style, location, clickHandler, stores }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <>

      <div className="box dev-mall-list-item" id={_id} onClick={() => clickHandler(stores, mallName)}>
          <h4 className='dev-mall-list-item-title'  onClick={() => toggleModal()}>{mallName}</h4>
          <ul>
              <li className='dev-mall-list-item-descrip' key={_id}>{location}</li>
              <li className='dev-mall-list-item-descrip' key={mallName}>{style}</li>
          </ul>
      </div>
      </>
  );
}

export default MallArray;

