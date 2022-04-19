import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_STORE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./style.css";

function DeveloperAddNewStore({ onClose }) {
  const [formState, setFormState] = useState({
    storeName: "",
    image: "",
    category: "",
    description: "",
    url: "",
  });

  const categories = [
    "ACCESSORIES",
    "APPAREL",
    "ARTS",
    "BEAUTY",
    "DEPARTMENT STORE",
    "DRINKS",
    "ELECTRONICS",
    "ENTERTAINMENT",
    "FAMILY",
    "FASHION",
    "FOOD",
    "FROZEN TREATS",
    "FULL SERVICE RESTRAUNT",
    "HAPPY HOUR BAR",
    "HEALTH",
    "HOME",
    "KIDS APPAREL",
    "LIFESTYLE",
    "LUXURY",
    "OTHER",
    "PETS",
    "QUICK BITES",
    "RECREATION",
    "SHOES",
    "SPECIALTY FOOD",
    "THEATER",
    "TOYS & GAMES",
    "TRAVEL",
  ];

  const recieveInput = (e) => {
    const { name, value } = e.target;
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }))
  };

  const recieveInputs = (e) => {
    const { name, value } = e.target;
    console.log("whats my category", value)
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    })).then((value) => {
      const imaged = value.slice(0, 4);
      console.log("consoling image", imaged)
      setFormState((oldState) => ({
        ...oldState,
        image: imaged,
    }));
  })};
  




// TODO: fix and ADD_STORE mutation
  const [updateStore, { error, loading, data }] = useMutation(UPDATE_STORE);

  const submitEditStore = async (event) => {
    // event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await updateStore({
        variables: { ...formState },
      });
      onClose();
      // //TODO:create add store authentication
      // Auth.newMall(data.updateStore.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <section>
        <div id="addNewStore" className="modalBackdrop">
          <div className="modalContainer">
            <div className=" inline margin50">
              {/* Store Name and input box */}
              <h1 className="modalTitles storeName">Store Name:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="storeName"
                name="storeName"
                placeholder="Edit Your Store Name"
                value={formState.storeName}
                onChange={recieveInput}
              ></input>

              {/* Store style and Drop down */}
              <h1 className="modalTitles storeName">Category:</h1>
              <select className="modalTextBox" id="style">
                {categories.map((catName) => (
                  <option
                    name={catName}
                    value={catName}
                    onClick={recieveInputs}
                  >
                    {catName}
                  </option>
                ))}
              </select>

              {/* Mall Location and input box */}
              <h1 className="modalTitles storeName">Description:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="description"
                name="description"
                placeholder="Edit the Description of the Store"
                value={formState.description}
                onChange={recieveInput}
              ></input>

              {/* Mall Location and input box */}
              <h1 className="modalTitles storeName">URL:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="url"
                name="url"
                placeholder="Change URL to Stores Website"
                value={formState.url}
                onChange={recieveInput}
              ></input>

              {/* Save and Cancel boxes */}
              <div>
                <button
                  // onClick={submitEditStore()}
                  onClick={() => submitEditStore()}
                  type="button"
                >
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

export default DeveloperAddNewStore;

// <********  Needs to be set above return statement in CustomerStoreList  ********>

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = (addNewMall) => {
//     setIsModalOpen(!isModalOpen);
//   };

//   <********  Needs to be set inside of return statement in DeveloperSingleMall  ********>

// {isModalOpen && (
//   <Modal onClose={toggleModal} />
// )}

//   <********  Needs to be attached to add new mall button in single mall view  ********>
// onClick={() => toggleModal(addNewMall)}