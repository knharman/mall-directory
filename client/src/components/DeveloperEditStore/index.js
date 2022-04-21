import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_STORE, REMOVE_STORE } from "../../utils/mutations";
import { Dropdown, DropdownButton, Container, Col } from "react-bootstrap";
import "./style.css";

function DeveloperEditStore({ mallId, store = {} }) {
  const storeName = store.storeName || "";
  const description = store.description || "";
  const url = store.url || "";

  const [formState, setFormState] = useState({
    storeName: "",
    image: "",
    category: "",
    description: "",
    url: "",
  });

  const letsCancel = async (event) => {
    window.location.reload();
  };

  const setFormValue = (name, value) => {
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const receiveEventInput = (e) => {
    const { name, value } = e.target;
    setFormValue(name, value);
  };

  const handleCategorySelect = (value) => {
    setFormValue("category", value)
  }

  const [updateStore] = useMutation(UPDATE_STORE);
  const [deleteStore] = useMutation(REMOVE_STORE);

  const submitDeleteStore = async (event) => {
    try {
      await deleteStore({
        variables: { mallId, storeId: store._id },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  const submitEditStore = async (event) => {
    try {
      await updateStore({
        variables: { ...formState, mallId, storeId: store._id },
      });
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (!e.target.value.length) {
      setErrorMessage(`All fields are required!`);
    } else {
      setErrorMessage("");
    }
  }

  return (
    <>
      <div className="center">
        <Container className="center2" fluid>
          <Col className="list-container" lg={9} md={9}>
            <div className="dropdown-container box">
              <Col className="dropdown-box box">
              <h1 className="store-title">UPDATING:</h1>
              <h1 className="store-title">{storeName}</h1>
              <p className="modalTitles storeName edit-store-input-title">New Store Name:</p>
              <input
                className="modalTextBox"
                type="text"
                id="storeName"
                name="storeName"
                placeholder={storeName}
                value={formState.storeName}
                onChange={receiveEventInput}
                onBlur={handleChange}
              ></input>

              <p className="modalTitles storeName edit-store-input-title">New Category:</p>
              <DropdownButton
                id="style-dropdown-button"
                alignRight
                name="category"
                title="Select Category"
                value={formState.category}
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
              <p className="modalTitles storeName edit-store-input-title">New Description:</p>
              <input
                className="modalTextBox"
                type="text"
                id="description"
                name="description"
                placeholder={description}
                value={formState.description}
                onChange={receiveEventInput}
                onBlur={handleChange}
              ></input>

              {/* Mall Location and input box */}
              <p className="modalTitles storeName edit-store-input-title">New URL:</p>
              <input
                className="modalTextBox"
                type="text"
                id="url"
                name="url"
                placeholder={url}
                value={formState.url}
                onChange={receiveEventInput}
                onBlur={handleChange}
              ></input>
              {errorMessage && (
                        <>
                            <p className="error-text">{errorMessage}</p>
                        </>
                    )}

              {/* Save and Cancel boxes */}
              <div>
                <button className='mall-list-button2'
                  onClick={() => submitDeleteStore()}
                  type="button"
                >
                  Delete
                </button>
                <button className='mall-list-button2'
                  onClick={() => submitEditStore()}
                  type="button"
                >
                  Submit
                </button>
                <button className='mall-list-button2' onClick={() => letsCancel()} type="button">
                  Cancel
                </button>
              </div>
            </Col>
          </div>
        </Col>
      </Container>
      </div>
    </>
  );
}

export default DeveloperEditStore;
