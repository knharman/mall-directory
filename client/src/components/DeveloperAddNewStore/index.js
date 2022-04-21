import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_STORE } from "../../utils/mutations";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Auth from "../../utils/auth";
import "./style.css";

function DeveloperAddNewStore({ mallId, onClose }) {
  const [formState, setFormState] = useState({
    mallId,
    storeName: "",
    category: "",
    description: "",
    url: "",
  });
  const [dropdown, setDropdown] = useState('');
  // const categories = [
  //   "ACCESSORIES",
  //   "APPAREL",
  //   "ARTS",
  //   "BEAUTY",
  //   "DEPARTMENT-STORE",
  //   "DRINKS",
  //   "ELECTRONICS",
  //   "ENTERTAINMENT",
  //   "FAMILY",
  //   "FASHION",
  //   "FOOD",
  //   "FROZEN-TREATS",
  //   "FULL-SERVICE-RESTRAUNT",
  //   "HAPPY HOUR BAR",
  //   "HEALTH",
  //   "HOME",
  //   "KIDS APPAREL",
  //   "LIFESTYLE",
  //   "LUXURY",
  //   "OTHER",
  //   "PETS",
  //   "QUICK BITES",
  //   "RECREATION",
  //   "SHOES",
  //   "SPECIALTY-FOOD",
  //   "THEATER",
  //   "TOYS-&-GAMES",
  //   "TRAVEL",
  // ];

  const setFormValue = (name, value) => {
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }))
  }

  const receiveEventInput = (e) => {
    const { name, value } = e.target;
    setFormValue(name, value)
  };

  const handleCategorySelect = (value) => {
    setFormValue("category", value)
  }


  // const receiveInputs = (e) => {
  //   const { name, value } = e.target;
  //   console.log("whats my category", value)
  //   setFormState((oldState) => ({
  //     ...oldState,
  //     [name]: value,
  //   })).then((value) => {
  //     const imaged = value.slice(0, 4);
  //     console.log("consoling image", imaged)
  //     setFormState((oldState) => ({
  //       ...oldState,
  //       image: imaged,
  //   }));
  // })};

  console.log("form state sucks!!!", formState)



  // TODO: fix and ADD_STORE mutation
  const [addStore, { error, loading, data }] = useMutation(ADD_STORE);

  const sumbitNewStore = async (event) => {
    // event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addStore({
        variables: { ...formState },
      });
      onClose();
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <section>
        <div id="addNewStore" className="modalBackdrop">
   
          <div className="modalContainer">
          <h1 className="modalNames" >Adding a new Store</h1>
            <div className=" inline margin50">
              {/* Store Name and input box */}
              <h1 className="modalTitles storeName">Store Name:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="storeName"
                name="storeName"
                placeholder="Enter The Store Name"
                value={formState.storeName}
                onChange={receiveEventInput}
              ></input>

              {/* Store style and Drop down */}
              <h1 className="modalTitles storeName">Category:</h1>
              {/* <select className="modalTextBox" id="style">
                {categories.map((catName) => (
                  <option
                    name={catName}
                    value={catName}
                    onSelect={recieveInputs}
                  >
                    {catName}
                  </option>
                ))}
              </select> */}
              <DropdownButton
                id="style-dropdown-button"
                alignRight
                name="category"
                title="Select Category"
                // id="dropdown-menu-align-right"
                onSelect={handleCategorySelect}
              >
                <Dropdown.Item className="mall-style-choice" eventKey="ACCESSORIES">ACCESSORIES</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="APPAREL">APPAREL</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="ARTS">ARTS</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="BEAUTY">BEAUTY</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="DEPARTMENT-STORE">DEPARTMENT STORE</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="DRINKS">DRINKS</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="ELECTRONICS">ELECTRONICS</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="ENTERTAINMENT">ENTERTAINMENT</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="FAMILY">FAMILY</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="FASHION">FASHION</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="FOOD">FOOD</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="FROZEN-TREATS">FROZEN TREATS</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="FULL-SERVICE-RESTAURANT">FULL SERVICE RESTAURANT</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="HAPPY-HOUR-BAR">HAPPY HOUR BAR</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="HEALTH">HEALTH</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="HOME">HOME</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="KIDS-APPAREL">KIDS APPAREL</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="LIFESTYLE">LIFESTYLE</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="LUXURY">LUXURY</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="OTHER">OTHER</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="PETS">PETS</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="QUICK-BITES">QUICK BITES</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="RECREATION">RECREATION</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="SHOES">SHOES</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="SPECIALTY-FOOD">SPECIALTY FOOD</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="THEATER">THEATER</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="TOYS-&-GAMES">TOYS & GAMES</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="TRAVEL">TRAVEL</Dropdown.Item>
              </DropdownButton>

              {/* Mall Location and input box */}
              <h1 className="modalTitles storeName">Description:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="description"
                name="description"
                placeholder="Add a Description of the Store"
                value={formState.description}
                onChange={receiveEventInput}
              ></input>

              {/* Mall Location and input box */}
              <h1 className="modalTitles storeName">URL:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="url"
                name="url"
                placeholder="Give URL to Stores Wedbsite"
                value={formState.url}
                onChange={receiveEventInput}
              ></input>

              {/* Save and Cancel boxes */}
              <div>
                <button className="add-mall-modal-button"
                  // onClick={sumbitNewStore()}
                  onClick={() => sumbitNewStore()}
                  type="button"
                >
                  Submit
                </button>
                <button className="add-mall-modal-button" onClick={onClose} type="button">
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
