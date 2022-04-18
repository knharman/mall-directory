import React from "react";
import { Link } from "react-router-dom";

function IndividualStore(store) {

  const {
    category,
    storeName,
  } = store;

  const image = category.substr(0, 3)

  // TODO: connect Link to modal to generate modal with required fields.
            
  return (
    
    <li className="box center">
      <Link to={`model.id`}>
        <img
          alt={storeName}
          src={`../../assets/images/${image}`}
        />
        <p>{storeName}</p>
      </Link>
    </li>
  );
}

export default IndividualStore;
