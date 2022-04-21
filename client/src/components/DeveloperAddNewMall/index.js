import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MALL } from "../../utils/mutations";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Auth from "../../utils/auth";
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

  // TODO: fix and ADD_STORE mutation
  const [addMall, { error }] = useMutation(ADD_MALL);

  const handleSelect = (e) => {
    // console.log(e)
    setDropdown(e)
  }
  // console.log(formState)
  const submitNewMall = async (event) => {
    // event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addMall mutation and pass in variable data from form
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

  return (
    <>
      <section>
        <div id="addNewMall" className="modalBackdrop mall-modal">
          <div className="modalContainer">
          <h1 className="modalNames" >Adding a New Mall</h1>
            <div className="inline margin50">
              {/* Mall Name and input box */}
              <h1 className="modalTitles storeName">Mall Name:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="mallName"
                name="mallName"
                placeholder="Enter Your Mall's Name"
                value={formState.mallName}
                onChange={recieveInput}
              ></input>
              {/* Mall style and Drop down */}
              <h1 className="modalTitles storeName">Mall Style:</h1>
              {/* <select className="modalTextBox" id="style" onSelect={handleSelect}>
                <option
                  name="style"
                  value="shoppingCenter"
                  
                >
                  Shopping Center
                </option>
                <option name="style" value="stripMall" onSelect={()=>setDropdown('stripMall')}>
                  Strip Mall
                </option>
                <option name="style" value="plaza" onSelect={()=>setDropdown('plaza')}>
                  Plaza
                </option>
              </select> */}
              <DropdownButton
                id="style-dropdown-button"
                alignRight
                title="Select Mall Type"
                // id="dropdown-menu-align-right"
                onSelect={handleSelect}
              >
                <Dropdown.Item className="mall-style-choice" eventKey="Shopping-Center">Shopping Center</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="Strip-Mall">Strip Mall</Dropdown.Item>
                <Dropdown.Item className="mall-style-choice" eventKey="Plaza">Plaza</Dropdown.Item>
              </DropdownButton>

              {/* Mall Location and input box */}
              <h1 className="modalTitles storeName">Mall Location:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="location"
                name="location"
                placeholder="City & State ONLY         Ex. Portland OR"
                value={formState.location}
                onChange={recieveInput}
              ></input>
              {/* Save and Cancel boxes */}
              <div>
                <button className="add-mall-modal-button"
                  // onClick={submitNewMall()}
                  onClick={() => submitNewMall()}
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

export default DeveloperAddNewMall;
