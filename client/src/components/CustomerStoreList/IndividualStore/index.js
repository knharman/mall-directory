import React from "react";
import "../style.css";

function IndividualStore(props) {
  return (
    <div>
      <li
        className="box store-list-numbers store-list-item"
        onClick={props.clickHandler}
      >
        <h3>{props.storeName}</h3>
        <p>{props.category.name}</p>
        <p>{props.url}</p>
      </li>
    </div>
  );
}

export default IndividualStore;
