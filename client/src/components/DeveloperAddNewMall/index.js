import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MALL } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./style.css";

function DeveloperAddNewMall({ onClose }) {

  const [formState, setFormState] = useState({
    mallName: "",
    style: "",
    location: "",
  });
// TODO: fix and ADD_STORE mutation
  const [addMall, { error, loading, data }] = useMutation(ADD_MALL);

  const submitNewMall = async (event) => {
    // event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addMall({
        variables: { ...formState },
      });
      onClose();
      // //TODO:create add mall authentication
      // Auth.newMall(data.addMall.token);
    } catch (e) {
      console.error(e);
    }
  };

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
                name="mallName"
                placeholder="Enter Your Mall's Name"
                value={formState.mallName}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormState((oldState) => ({ ...oldState, [name]: value }));
                }}
              ></input>
              {/* Mall style and Drop down */}
              <h1 className="modalTitles storeName">Mall Style:</h1>
              <select className="modalTextBox" id="style">
                <option
                  name="style"
                  value="shoppingCenter"
                  onClick={(e) => {
                    const { name, value } = e.target;
                    setFormState((oldState) => ({
                      ...oldState,
                      [name]: value,
                    }));
                  }}
                >
                  Shopping Center
                </option>
                <option
                  name="style"
                  value="stripMall"
                  onClick={(e) => {
                    const { name, value } = e.target;
                    setFormState((oldState) => ({
                      ...oldState,
                      [name]: value,
                    }));
                  }}
                >
                  Strip Mall
                </option>
                <option
                  name="style"
                  value="plaza"
                  onClick={(e) => {
                    const { name, value } = e.target;
                    setFormState((oldState) => ({
                      ...oldState,
                      [name]: value,
                    }));
                  }}
                >
                  Plaza
                </option>
              </select>

              {/* Mall Location and input box */}
              <h1 className="modalTitles storeName">Mall Location:</h1>
              <input
                className="modalTextBox"
                type="text"
                id="location"
                name="location"
                placeholder="City & State ONLY         Ex. Portland OR"
                value={formState.location}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormState((oldState) => ({ ...oldState, [name]: value }));
                }}
              ></input>
              {/* Save and Cancel boxes */}
              <div>
                <button
                  // onClick={submitNewMall()}
                  onClick={() => submitNewMall()}
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

export default DeveloperAddNewMall;

// <********  Needs to be set above return statement in CustomerStoreList  ********>



//   <********  Needs to be set inside of return statement in DeveloperMallList  ********>

// {isModalOpen && (
//   <Modal onClose={toggleModal} />
// )}

//   <********  Needs to be attached to add new mall button on side bar  ********>
// onClick={() => toggleModal(addNewMall)}
