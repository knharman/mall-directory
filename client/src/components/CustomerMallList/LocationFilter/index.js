import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MALLS } from "../utils/queries";

function LocationFilter() {
  const { Mall } = useQuery(QUERY_MALLS);
 
  const locations = Mall.map((malls) => malls.location);

  let unique = [...new Set(locations)];

  return (
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
          <option value={loc}
          onChange={() => {
            handleChange(loc);
          }}></option>
        ))}
      </datalist>
    </div>
  );
}

export default LocationFilter;
