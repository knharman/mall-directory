import React from "react";

function IndividualStore(props) {
           
  return (
    
    <li className="box center" onClick={props.clickHandler}>
      <img
          alt={props.storeName}
          src={`${props.image}`}
        />
        <p>{props.storeName}</p>
    </li>
  );
}

export default IndividualStore;
