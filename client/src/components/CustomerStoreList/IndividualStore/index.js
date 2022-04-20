import React from "react";
import '../style.css'

function IndividualStore(props) {
           
  return (
    
    <li className="box center store-list-item" onClick={props.clickHandler}>
      <img
          alt={props.storeName}
          src={`${props.image}`}
        />
        <p>{props.storeName}</p>
    </li>
  );
}

export default IndividualStore;
