import React, { useEffect, useState } from 'react';
import DeveloperAddNewMall from '../DeveloperAddNewMall'
import { useQuery } from '@apollo/client';
import { QUERY_DEVELOPER} from '../../utils/queries';

  // import MallArray from './MallArray';

function DeveloperMallList() {



  // ***********   Can you also look over make sure what I have commented out will return the right info for mall list?  ********
  // ***********  I want mall list to look like the hard code example I have below when I uncomment it. **********
//   const { loading, data } = useQuery(QUERY_DEVELOPER);
//   console.log("whats inside data ?", data)
//   const mallList = data.malls;
// console.log("whats inside?", mallList)

const mallList = [
    // ************ uncomment below to get data for map function ***********
//     {
//     mallName: "Ram",
//       age: "20"
// }
]


console.log("whats inside?", mallList.length)

const [isModalOpen, setIsModalOpen] = useState(false);
const toggleModal = (addNewMall) => {
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

  // ************* Here is where it breaks **************
        <ul className="flex-row">
          {mallList().map((mall, index) => (
            <li>
                {/* TODO: add function to generate Single Mall with all Stores View. */}
                {mall[index].mallName}
            </li>
          ))}
        </ul>
  // ************* Good after this point **************

      ) : (
        <h3>You haven't added any malls yet!</h3>
      )}
      <button onClick={() => toggleModal()}>
          Add New MAll
      </button>
    </div>
    </>
  );
}

export default DeveloperMallList;
