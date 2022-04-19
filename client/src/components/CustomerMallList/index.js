import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { GET_MALLS } from "../../utils/queries";
import IndividualMall from "./IndividualMall";
import CustomerStoreList from "../CustomerStoreList";

function CustomerMallList() {
  const { loading, data, error } = useQuery(GET_MALLS);
  const [locationFilter, setLocationFilter] = useState("")
  const [stores, setStores] = useState([])

  const uniqueLocations = () => {
    let uniques = []
    data.malls.forEach(mall => {
      if (!uniques.includes(mall.location)) {
        uniques.push(mall.location)
      }
    });
    return uniques
  }

  const filterMalls = () => {
    let matchingMalls = []

    data.malls.forEach(mall => {
      if (locationFilter == mall.location) {
        matchingMalls.push(mall)
      }
    });

    return matchingMalls
  }

  const handleMallClick = (storeList) => {
    console.log(storeList)
    setStores(storeList)
  }

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error</div>
  }

  return (
    <>
      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">List of Malls</h2>
            <div className="center">
              {
                uniqueLocations().length === 0 ? (
                  <h3>No malls have been added yet!</h3>
                ) : (
                  <>
                    <h4>Filter by Location:</h4>
                    <DropdownButton id="dropdown-basic-button" title="Select a City">
                      {
                        uniqueLocations().map((uniqueLocation, index) => <Dropdown.Item href="#" key={index} onClick={() => { setLocationFilter(uniqueLocation) }}>{uniqueLocation}</Dropdown.Item>)
                      }
                    </DropdownButton>
                  </>
                )
              }
            </div>
          </div>
          <ul className="scrollBox">
            {filterMalls().map((mall, index) => (
              <li key={index}>
                <IndividualMall {...mall} clickHandler={handleMallClick} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CustomerStoreList stores={stores} />
    </>

  );
}

export default CustomerMallList;
