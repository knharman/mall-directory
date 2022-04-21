import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_STORE } from "../../utils/mutations";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./style.css";

function DeveloperAddNewStore({ mallId, onClose }) {
  const [formState, setFormState] = useState({
    mallId,
    storeName: "",
    category: "",
    description: "",
    url: "",
  });

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

  const [addStore] = useMutation(ADD_STORE);

  const sumbitNewStore = async (event) => {
    try {
      await addStore({
        variables: { ...formState },
      });
      onClose();
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {

    if (!e.target.value.length) {
      setErrorMessage(`All fields are required!`);
    } else {
      setErrorMessage('');
    }
  }

  return (
    <>
      <section>
        <div id="addNewStore" className="modalBackdrop">

          <div className="modalContainer">
            <h1 className="modalNames" >Adding a new Store</h1>
            <div className=" inline margin50">
              <h1 className="modalTitles storeName">Store Name:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="storeName"
                name="storeName"
                placeholder="Enter The Store Name"
                value={formState.storeName}
                onChange={receiveEventInput}
                onBlur={handleChange}
              ></input>

              <h1 className="modalTitles storeName">Category:</h1>
              <DropdownButton
                id="style-dropdown-button"
                alignRight
                name="category"
                title="Select Category"
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

              <h1 className="modalTitles storeName">Description:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="description"
                name="description"
                placeholder="Add a Description of the Store"
                value={formState.description}
                onChange={receiveEventInput}
                onBlur={handleChange}
              ></input>

              <h1 className="modalTitles storeName">URL:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="url"
                name="url"
                placeholder="Give URL to Stores Wedbsite"
                value={formState.url}
                onChange={receiveEventInput}
                onBlur={handleChange}
              ></input>
              {errorMessage && (
                <>
                  <p className="error-text">{errorMessage}</p>
                </>
              )}

              <div>
                <button className="add-mall-modal-button"
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