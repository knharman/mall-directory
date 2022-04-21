import React from "react";
import '../style.css'

function IndividualStore(props) {
           
  return (
    <div>
    <li className="box store-list-numbers store-list-item" onClick={props.clickHandler}>
      <img
          alt={props.storeName}
          src={`${props.image}`}
        />
        <p>{props.storeName}</p>
    </li>
    </div>
  );
}

export default IndividualStore;
