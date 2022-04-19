import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import IndividualStore from "./IndividualStore";
import CustomerStoreModal from "../CustomerStoreModal";
import CustomerMallList from "../CustomerMallList";
import { GET_CATEGORIES } from "../../utils/queries";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CustomerStoreList({stores = [], mallName = "Select a Mall"}) {

  const { loading, data, error } = useQuery(GET_CATEGORIES);
  const [ currentCategory, setCurrentCategory ] = useState({name: ""});
  const [ currentStore, setCurrentStore ] = useState(null);

  if (loading) {
    return <h2>Loading Categories...</h2>
  }
  if (error) {
    return <h2>Sorry, no categories exist.</h2>
  }

  return (
    <>
      {currentStore && (
        <CustomerStoreModal store={currentStore} />
      )}

      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">{mallName}</h2>
            <div className="center">
              <h3 className="modalTitles storeName">Category:</h3>
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
              <IndividualStore key={index} clickHandler={() => setCurrentStore(store)} {...store} />
            ))}
          </ul> 
        </div>
      </section>
    </>
  );
}

export default CustomerStoreList;
