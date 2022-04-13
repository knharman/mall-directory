import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MALLS } from "../utils/queries";

function CustomerMallList() {
  const { Mall } = useQuery(QUERY_MALLS);

  const locations = Mall.location;

  let unique = [...new Set(locations)];

  return (
    <>
      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">List of Malls</h2>
            <div className="center">
              <input
                className="center"
                list="select"
                name="selectCity"
                placeholder="Select A Category"
              ></input>
              {/* Maps over locations for drop down filtering */}
              <datalist className="center" id="select">
                {unique.map((loc) => (
                  <option value={loc}></option>
                ))}
              </datalist>
            </div>
          </div>
          {/* TODO: create filtration in response to input value above */}
          <ul className="scrollBox">
            {Mall.map(({ mallName, style, location, _id }) => (
              // TODO: create an onClick() funtion that will generate the stores array in the stores field.
              <li className="box center" id={_id}>
                <h4>{mallName} </h4>
                <p>Style: {style}</p>
                <p>Location: {location}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CustomerMallList;
