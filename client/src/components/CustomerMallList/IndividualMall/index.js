import React from "react";

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
        <h5>{mallName}</h5>
        <div>
          <p>Style: {style}</p>
          <p>Location: {location}</p>
        </div>
    </li>
  );
}

export default IndividualMall;