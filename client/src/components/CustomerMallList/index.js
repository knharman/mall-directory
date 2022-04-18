import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MALLS } from "../../utils/queries";
import IndividualMall from "./IndividualMall";
import CustomerStoreList from "../CustomerStoreList";

function CustomerMallList() {
  const { loading, data, error } = useQuery(QUERY_MALLS);

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  // ********* need the following properly syntaxed *******
  // const mallLists = data.malls;
  const mallLists = [];
  console.log("malllist", mallLists);

  // **** Need function that will filter and pull all mall location and place in array called unique
  const unique = ["map", "car"];

  // console.log("unique?", unique);

  const newLocation = "";

  //gets input from location drop down and asssigned that value to the variable new Location
  const handleChange = (id) => {
    const newLocation = id;
    return newLocation;
  };

  // runs a filter to check if newLocation variable is still set to empty string if not filter by malls with that location string
  const filterMalls = () => {
    console.log(data);
    if (!newLocation) {
      return data.malls;
    }

    return data.malls.filter((mall) => mall.location === newLocation);
  };

  if (data) console.log("any data", data);
  if (error) console.log(error);

  // ************ I think this will work below but need to test once other bugs are worked out ************

  // send mall ID to stores section to map all stores in the malls stores section.
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
          {mallLists.length > 0 ? (
            <>
              <div className="box inline margin50">
                <h2 className="center">List of Malls</h2>

                <div className="center">
                  <h4>Filter by Location:</h4>
                  <input
                    className="center"
                    list="select"
                    name="selectCity"
                    placeholder="Select A City"
                  ></input>
                  {/* Maps over locations for drop down filtering */}
                  <datalist className="center" id="select1">
                    {unique.map((loc) => (
                      <option
                        value={loc}
                        onClick={() => {
                          handleChange(loc);
                        }}
                      ></option>
                    ))}
                  </datalist>
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
