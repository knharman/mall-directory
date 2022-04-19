import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import IndividualStore from "./IndividualStore";
import CustomerStoreModal from "../CustomerStoreModal";
import CustomerMallList from "../CustomerMallList";
import { GET_CATEGORIES } from "../../utils/queries";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CustomerStoreList({stores = []}) {

  const { loading, data, error } = useQuery(GET_CATEGORIES);
  const [ currentCategory, setCurrentCategory ] = useState({name: ""});

  if (loading) {
    return <h2>Loading Categories...</h2>
  }
  if (error) {
    return <h2>Sorry, no categories exist.</h2>
  }

  return (
    <>
      {isModalOpen && (
        <CustomerStoreModal currentStore={currentStore} onClose={toggleModal} />
      )}

      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">Name of Mall Selected</h2>
            <h3 className="center">Store Names</h3>
            <div className="center">
              <h1 className="modalTitles storeName">Category:</h1>
              <DropdownButton title="Choose a Category">
              {data.categories.map((category, index) => (
                  <Dropdown.Item name={category} value={category} key={index} onClick={() => {setCurrentCategory(category)}}>
                    {category.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          </div>

          <ul className="scrollBox">
            {stores.filter((store) => store.category.name == currentCategory.name || currentCategory.name == "").map((store, index) => (
              <IndividualStore key={index} onClick={() => toggleModal(store, index)} {...store} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CustomerStoreList;
