import React from "react";
import { Link } from "react-router-dom";
import CustomerStoreList from "../CustomerStoreList";

function IndividualMall(mall) {

  const {
    _id,
    mallName,
    style,
    location
  } = mall;

  // TODO: connect CustomerStoreList so it will generate filter onto Store List
            
  return (
    
    <li className="box center" id={_id}>
      <Link to={ CustomerStoreList }>
        <h5>{mallName}</h5>
        <div>
          <p>Style: {style}</p>
          <p>Location: {location}</p>
        </div>
      </Link>
    </li>
  );
}

export default IndividualMall;
