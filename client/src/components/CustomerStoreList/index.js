import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_STORES } from "../../utils/queries";
import CategoryFilter from "./CategoryFilter";
import IndividualStore from "./IndividualStore";
import CustomerMallList from "../CustomerMallList";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_STORES } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function CustomerStoreList(mallID) {

  const {storeName, image, category, description, url} = mallID

  const storeListings = [
    {storeName: "store1", image: "image1", category: "category1", description: "description1", url: "url1"},
    {storeName: "store2", image: "image2", category: "category2", description: "description2", url: "url2"},
    {storeName: "store3", image: "image3", category: "category3", description: "description3", url: "url3"},
    {storeName: "store4", image: "image4", category: "category4", description: "description4", url: "url4"}

  ]

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


 const storeData = '';
 
  const recieveInput = (e) => {
    const { name, value } = e.target;
    const storeData = name;
    return storeData
  };
// ******** Will need to uncomment when putting into production *********
  // const filterStores = () => {
  //   console.log(mallID);
  //   if (!storeData) {
  //     return mallID.stores;
  //   }

  //   return mallID.stores.filter((store) => store.category === storeData);
  // };
  // ******** Will need to comment out or delete when putting into production *********
  const filterStores = () => {
    console.log(storeListings);
    if (!storeData) {
      return storeListings.stores;
    }

    return storeListings.stores.filter((store) => store.category === storeData);
  };
  // ******** end of what needs to be commented out *********
  return (
    <>
      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">Name of Mall Selected</h2>
            <h3 className="center">Store Names</h3>
            <div className="center">


            <h1 className="modalTitles storeName">Category:</h1>
              <select className="modalTextBox" id="style">
                {categories.map((catName) => (
                  <option
                    name={catName}
                    value={catName}
                    onClick={recieveInput}
                  >
                    {catName}
                  </option>
                ))}
              </select>


            </div>
          </div>

          <ul className="scrollBox">
            {filterStores().map((store) => (
              <IndividualStore
                key={store._id}
                _id={store._id}

                image={store.image}
                name={store.StoreName}
                description={store.description}
                Url={store.Url}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CustomerStoreList;
