import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MALLS } from "../../utils/queries";
import IndividualMall from "./IndividualMall";

function CustomerMallList() {

  const { loading, data, error } = useQuery(QUERY_MALLS);

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  const unique = data.map((location) => (
location.location
  ));

  console.log("unique?", unique)

 const newLocation = '';

  const handleChange = (id) => {
    const newLocation = id;
    return newLocation
  }

   const filterMalls = () => {

    console.log(data);
    if (!newLocation) {
      return data.malls;
    }

    return data.malls.filter((mall) => mall.location === newLocation);
  };

  if (data) console.log("any data", data);
  if (error) console.log(error);
  return (
    <>
      <section>
        <div className="box margin50">
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
            {filterMalls().map((mall) => (
              <IndividualMall
                key={mall._id}
                _id={mall._id}
                style={mall.style}
                location={mall.location}
                store={[mall.store]}
              />
            ))}
          </ul>
        </div>
      </section>
      <div>
        {loading && "loading..."}
        {error && "Had an error"}
      </div>
    </>
  );
}

export default CustomerMallList;
