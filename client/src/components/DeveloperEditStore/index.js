import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_STORE, REMOVE_STORE } from "../../utils/mutations";
import { Dropdown, DropdownButton, Container, Col, Row } from "react-bootstrap";
import Auth from "../../utils/auth";
import "./style.css";



function DeveloperEditStore({ mallId, store = {} }) {

  console.log("DeveloperEditStore", store)

  const catty = store.category || ""

  const storeID = store._id || "";
  const storeName = store.storeName || "";
  const image = store.image || "";
  const category = catty.name || "";
  const description = store.description || "";
  const url = store.url || "";

  // console.log("category", category)

  // console.log("what is store alone?", storeID)


  const [formState, setFormState] = useState({
    storeName: "",
    image: "",
    category: "",
    description: "",
    url: "",
  });


  // console.log("what is formState?", formState)


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

  const letsCancel = async (event) => {
    window.location.reload();
  };

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





  // TODO: fix and ADD_STORE mutation
  const [updateStore] = useMutation(UPDATE_STORE);
  const [deleteStore] = useMutation(REMOVE_STORE);

  const submitDeleteStore = async (event) => {
    // event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await deleteStore({
        variables: { mallId, storeId: store._id },
      });

    } catch (e) {
      console.error(e);
    }
  };
  console.log("formState", formState)

  console.log("store._id", store._id);
  const submitEditStore = async (event) => {
    // event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      await updateStore({
        variables: { ...formState, mallId, storeId: store._id },
      });
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
    <div className="center">
    <Container className="center2" fluid>
          <Col className="list-container" lg={9} md={9}>
            <div className="dropdown-container box">
              <Col className="dropdown-box box">
              {/* Store Name and input box */}
              <h1 className="store-title">Updating: {storeName}</h1>
              <p className="modalTitles storeName">Store Name:</p>
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

              {/* Store style and Drop down */}
              <p className="modalTitles storeName">New Category:</p>
              {/* <select className="modalTextBox" id="style">
                {categories.map((catName) => (
                  <option
                    name="category"
                    value={catName}
                    onChange={() => {
                      receiveInputs();
                    }}
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
                value={formState.category}
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
              <p className="modalTitles storeName">New Description:</p>
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
              <p className="modalTitles storeName">URL:</p>
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
                  // onClick={submitEditStore()}
                  onClick={() => submitDeleteStore()}
                  type="button"
                >
                  Delete
                </button>
                <button className='mall-list-button2'
                  // onClick={submitEditStore()}
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