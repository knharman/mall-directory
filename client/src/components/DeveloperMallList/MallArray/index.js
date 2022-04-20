import React, { useEffect, useState } from 'react';
import '../style.css'
import DeveloperStoreList from '../../DeveloperStoreList';

function MallArray({ mallName, style, location, _id }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <>

      <div className="my-2">
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

