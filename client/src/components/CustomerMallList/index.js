import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { GET_MALLS } from "../../utils/queries";
import IndividualMall from "./IndividualMall";
import CustomerStoreList from "../CustomerStoreList";

function CustomerMallList() {
  const { loading, data, error } = useQuery(GET_MALLS);
  const [locationFilter, setLocationFilter] = useState("")

  const mallList = [
    {
      mallName: "Ram",
      style: "indoor",
      location: "portland"
    },
    {
      mallName: "Galleria",
      style: "outdoor",
      location: "Anaheim"
    },
    {
      mallName: "Mainplace",
      style: "indoor",
      location: "Garden Grove"
    }, 
    {
      mallName: "Mall",
      style: "outdoor",
      location: "Anaheim"
    }
  ]

  const uniqueLocations = () => {
    let uniques = []
    mallList.forEach(mall => {
      if(!uniques.includes(mall.location)) {
        uniques.push(mall.location)
      }
    });
    return uniques
  }

  const filterMalls = () => {
    let matchingMalls = []

    mallList.forEach(mall => {
      if(locationFilter == mall.location) {
        matchingMalls.push(mall)
      }
    });

    return matchingMalls
  }

  if (data) console.log("any data", data);
  if (error) console.log(error);

  const updateStores = (index, store) => {
    return (
      <div key={index}>
        <CustomerStoreList {...store} />
      </div>
    );
  };

  return (
    <>
      <section>
        <div className="box margin50">
          {mallList.length > 0 ? (
            <>
              <div className="box inline margin50">
                <h2 className="center">List of Malls</h2>

                <div className="center">
                  <h4>Filter by Location:</h4>

                  <DropdownButton id="dropdown-basic-button" title="Select a City">
                    {
                    uniqueLocations().map((uniqueLocation, index) => <Dropdown.Item href="#" key={index} onClick={() => {setLocationFilter(uniqueLocation)}}>{uniqueLocation}</Dropdown.Item>)
                    }
                  </DropdownButton>
                </div>
              </div>
              <ul className="scrollBox">
                {filterMalls().map((mall, index) => (
                  <li key={index} onClick={() => updateStores(mall, index)}>
                    <IndividualMall {...mall} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h3>There are currently no Malls in the database.</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default CustomerMallList;
