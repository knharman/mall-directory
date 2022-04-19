import React from "react";

function IndividualMall({ _id, mallName, style, location, clickHandler, stores }) {

           
  return (
    <div className="box center" id={_id} onClick={() => clickHandler(stores)}>
        <h5>{mallName}</h5>
        <div>
          <p>Style: {style}</p>
          <p>Location: {location}</p>
        </div>
    </div>
  );
}

export default IndividualMall;
