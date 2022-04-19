import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import IndividualStore from "./IndividualStore";
import CustomerStoreModal from "../CustomerStoreModal";
import CustomerMallList from "../CustomerMallList";
import { GET_CATEGORIES } from "../../utils/queries";
import { Dropdown, DropdownButton } from "react-bootstrap";


// ******** shouldn't need the unused imported files above but leaving till all bugs are gone. *****

function CustomerStoreList({stores = []}) {

  const { loading, data, error } = useQuery(GET_CATEGORIES);

  // ******** Will need to delete when putting into production *********
  // const storeListings = [
  //   {
  //     storeName: "store1",
  //     image: "image1",
  //     category: "category1",
  //     description: "description1",
  //     url: "url1",
  //   },
  //   {
  //     storeName: "store2",
  //     image: "image2",
  //     category: "category2",
  //     description: "description2",
  //     url: "url2",
  //   },
  //   {
  //     storeName: "store3",
  //     image: "image3",
  //     category: "category3",
  //     description: "description3",
  //     url: "url3",
  //   },
  //   {
  //     storeName: "store4",
  //     image: "image4",
  //     category: "category4",
  //     description: "description4",
  //     url: "url4",
  //   },
  // ];
  // ******** End of what needs to be deleted *********

  // const categories = [
  //   "ACCESSORIES",
  //   "APPAREL",
  //   "ARTS",
  //   "BEAUTY",
  //   "DEPARTMENT STORE",
  //   "DRINKS",
  //   "ELECTRONICS",
  //   "ENTERTAINMENT",
  //   "FAMILY",
  //   "FASHION",
  //   "FOOD",
  //   "FROZEN TREATS",
  //   "FULL SERVICE RESTRAUNT",
  //   "HAPPY HOUR BAR",
  //   "HEALTH",
  //   "HOME",
  //   "KIDS APPAREL",
  //   "LIFESTYLE",
  //   "LUXURY",
  //   "OTHER",
  //   "PETS",
  //   "QUICK BITES",
  //   "RECREATION",
  //   "SHOES",
  //   "SPECIALTY FOOD",
  //   "THEATER",
  //   "TOYS & GAMES",
  //   "TRAVEL",
  // ];

  // const storeData = "";

  // const recieveInput = (e) => {
  //   const { name, value } = e.target;
  //   const storeData = name;
  //   return storeData;
  // };
  // ******** Will need to uncomment when putting into production *********
  // const filterStores = () => {
  //   console.log(mallID);
  //   if (!storeData) {
  //     return mallID.stores;
  //   }

  //   return mallID.stores.filter((store) => store.category === storeData);
  // };
  // ******** end of what needs to be uncommented *********
  // ******** Will need to comment out or delete when putting into production *********
  // const filterStores = () => {
  //   console.log(storeListings);
  //   if (!storeData) {
  //     return storeListings.stores;
  //   }

  //   return storeListings.stores.filter((store) => store.category === storeData);
  // };
  // ******** end of what needs to be commented out *********

  // Used to generate store modal when a store is clicked
  const [currentStore, setCurrentStore] = useState();
  const [currentCategory, setCurrentCategory] = useState({name: ""});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (store, i) => {
    setCurrentStore({ ...store, index: i });
    setIsModalOpen(!isModalOpen);
  };

  if (loading) {
    return <h2>Loading Categories...</h2>
  }
  if (error) {
    return <h2>Sorry, no categories exist.</h2>
  }

  console.log(currentCategory)
  console.log(stores)

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
