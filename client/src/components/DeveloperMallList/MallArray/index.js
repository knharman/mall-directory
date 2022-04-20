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

      <div className="box center single-mall-list-item" id={_id} onClick={() => clickHandler(stores, mallName)}>
          <h4  onClick={() => toggleModal()}>{mallName}</h4>
          <ul>
              <li key={_id}>{location}</li>
              <li key={mallName}>{style}</li>
          </ul>
      </div>
      </>
  );
}

export default MallArray;

