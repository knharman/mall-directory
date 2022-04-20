import React from "react";
import '../style.css';

function IndividualMall({ _id, mallName, style, location, clickHandler, stores }) {

           
  return (
    <div className="box single-mall-list-item" id={_id} onClick={() => clickHandler(stores, mallName)}>
        <h5>{mallName}</h5>
        <div>
          <p>Style: {style}</p>
          <p>Location: {location}</p>
        </div>
    </div>
  );
}

export default IndividualMall;
