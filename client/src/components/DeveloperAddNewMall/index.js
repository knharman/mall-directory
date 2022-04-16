import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MALL } from "../../utils/mutations";
import Auth from '../../utils/auth';
import "./style.css";

function DeveloperAddNewMall(onClose) {

  // TODO: issue with post request rendering (may be linked to mutation)
  // const mallNameValue = document.getElementByID("mallName");
  // const styleValue = document.getElementByID("style");
  // const locationValue = document.getElementByID("location");
  //   const [formState, setFormState] = useState({
  //     mallName: {mallNameValue},
  //     style: {styleValue},
  //     location: {locationValue},
  //   });


  //   const [addMall, { error }] = useMutation(ADD_MALL);

  // const submitNewMall = async (event) => {
  //   event.preventDefault();

  //   // use try/catch instead of promises to handle errors
  //   try {
  //     // execute addUser mutation and pass in variable data from form
  //     const { data } = await addMall({
  //       variables: { ...formState },
  //     });
  //     //TODO:create add mall authentication
  //     Auth.newMall(data.addMall.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };


  return (
    <>
      <section>
        <div id="addNewMall" className="modalBackdrop">
          <div className="modalContainer">
            <div className=" inline margin50">
              {/* Mall Name and input box */}
              <h1 className="modalTitles storeName">Mall Name:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="mallName"
                name="mallName1"
                placeholder="Enter Your Mall's Name"
              ></input>
              {/* Mall style and Drop down */}
              <h1 className="modalTitles storeName">Mall Style:</h1>
              <select className="modalTextBox" id="style">
                <option value="shoppingCenter">Shopping Center</option>
                <option value="stripMall">Strip Mall</option>
                <option value="plaza">Plaza</option>
              </select>
{/* Mall Location and input box */}
              <h1 className="modalTitles storeName">Mall Location:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="mallName"
                name="mallName"
                placeholder="City & State ONLY         Ex. Portland OR"
              ></input>
{/* Save and Cancel boxes */}
              <div>
                <button 
                // onClick={submitNewMall()} 
                onClick={onClose} 
                type="button">
                  Submit
                </button>
                <button onClick={onClose} type="button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeveloperAddNewMall;

// <********  Needs to be set above return statement in CustomerStoreList  ********>

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = (addNewMall) => {
//     setIsModalOpen(!isModalOpen);
//   };

//   <********  Needs to be set inside of return statement in DeveloperMallList  ********>

// {isModalOpen && (
//   <Modal onClose={toggleModal} />
// )}

//   <********  Needs to be attached to add new mall button on side bar  ********>
// onClick={() => toggleModal(addNewMall)}
