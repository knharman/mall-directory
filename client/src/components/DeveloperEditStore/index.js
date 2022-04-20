import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_STORE, REMOVE_STORE } from "../../utils/mutations";
import { Dropdown, DropdownButton, Container, Col, Row } from "react-bootstrap";
import Auth from "../../utils/auth";
import "./style.css";



function DeveloperEditStore({ store = {} }) {



const catty = store.category || ""

const storeID = store._id || "";
const storeName = store.storeName || "";
const image = store.image || "";
const category = catty.name || "";
const description = store.description || "";
const url = store.url || "";

console.log("category", category)

console.log("what is store alone?", storeID)


  const [formState, setFormState] = useState({
    _id: storeID,
    storeName: "",
    image: "",
    category: "",
    description: "",
    url: "",
  });


  console.log("what is formState?", formState)


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

    try {
      const { data } = await updateStore({
        variables: {     
          storeName: storeName,
          image: image,
          category: category,
          description: description,
          url: url,
      },
      });
    } catch (e) {
      console.error(e);
    }
  };

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
const [updateStore] = useMutation(UPDATE_STORE);
const [deleteStore] = useMutation(REMOVE_STORE);

const submitDeleteStore = async (event) => {
  // event.preventDefault();

  // use try/catch instead of promises to handle errors
  try {
    const { data } = await deleteStore({
      variables: { ...formState },
    });

  } catch (e) {
    console.error(e);
  }
};

const submitEditStore = async (event) => {
  // event.preventDefault();

  // use try/catch instead of promises to handle errors
  try {
    const { data } = await updateStore({
      variables: { ...formState },
    });
  } catch (e) {
    console.error(e);
  }
};

  return (
    <>
      <Container fluid>
      <Col className="mall-list-container" lg={5} md={5}>
          <div className="">

          <Col className="mall-dropdown-box box">
              {/* Store Name and input box */}
              <h1 className="center mall-list-title">Updating: {storeName}</h1>
              <p className="modalTitles storeName">Store Name:</p>
              <input
                className="modalTextBox"
                type="text"
                id="storeName"
                name="storeName"
                placeholder={storeName}
                value={formState.storeName}
                onChange={recieveInput}
              ></input>

              {/* Store style and Drop down */}
              <p className="modalTitles storeName">New Category:</p>
              <select className="modalTextBox" id="style">
                {categories.map((catName) => (
                  <option
                    name="category"
                    value={catName}
                    onChange={() => {
                      recieveInputs();
                    }}
                  >
                    {catName}
                  </option>
                ))}
              </select>

              {/* Mall Location and input box */}
              <p className="modalTitles storeName">New Description:</p>
              <input
                className="modalTextBox"
                type="text"
                id="description"
                name="description"
                placeholder={description}
                value={formState.description}
                onChange={recieveInput}
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
                onChange={recieveInput}
              ></input>

              {/* Save and Cancel boxes */}
              <div>
              <button
                  // onClick={submitEditStore()}
                  onClick={() => submitDeleteStore()}
                  type="button"
                >
                  Delete
                </button>
                <button
                  // onClick={submitEditStore()}
                  onClick={() => submitEditStore()}
                  type="button"
                >
                  Submit
                </button>
                <button onClick={() => letsCancel()} type="button">
                  Cancel
                </button>
              </div>
              </Col>
          </div>
        </Col>
        </Container>
    </>
  );
}

export default DeveloperEditStore;