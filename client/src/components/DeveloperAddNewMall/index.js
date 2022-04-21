import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MALL } from "../../utils/mutations";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./style.css";

function DeveloperAddNewMall({ onClose }) {
  const [formState, setFormState] = useState({
    mallName: "",
    location: "",
  });
  const [dropdown, setDropdown] = useState('');


  const recieveInput = (e) => {
    const { name, value } = e.target;
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const [addMall] = useMutation(ADD_MALL);

  const handleSelect = (e) => {
    setDropdown(e)
  }

  const submitNewMall = async (event) => {

    try {
      const mallObj = {
        ...formState,
        style: dropdown
      }
      await addMall({
        variables: { ...mallObj },
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
        <div id="addNewMall" className="modalBackdrop mall-modal">
          <div className="modalContainer">
            <h1 className="modalNames" >Adding a New Mall</h1>
            <div className="inline margin50">
              <h1 className="modalTitles storeName">Mall Name:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="mallName"
                name="mallName"
                placeholder="Enter Your Mall's Name"
                value={formState.mallName}
                onChange={recieveInput}
                onBlur={handleChange}
              ></input>
              <h1 className="modalTitles storeName">Mall Style:</h1>

              <DropdownButton
                id="style-dropdown-button"
                alignRight
                title="Select Mall Type"
                onSelect={handleSelect}
              >
                <Dropdown.Item className="mall-style-choice" eventKey="Shopping-Center">Shopping Center</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="Strip-Mall">Strip Mall</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="Plaza">Plaza</Dropdown.Item>
              </DropdownButton>

              <h1 className="modalTitles storeName">Mall Location:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="location"
                name="location"
                placeholder="City & State ONLY         Ex. Portland OR"
                value={formState.location}
                onChange={recieveInput}
                onBlur={handleChange}
              ></input>
              {errorMessage && (
                <>
                  <p className="error-text">{errorMessage}</p>
                </>
              )}

              <div>
                <button className="add-mall-modal-button"
                  onClick={() => submitNewMall()}
                  type="button">
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

export default DeveloperAddNewMall;
