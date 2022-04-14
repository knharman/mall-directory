import React from "react";
import { Link } from "react-router-dom";

function SingleStore(store) {

  const {
    image,
    storeName,
  } = store;

  // TODO: connect Link to modal to generate modal with required fields.
            
  return (
    
    <li className="box center">
      <Link to={`model.${_id}`}>
        <img
          alt={storeName}
          src={`/images/${image}`}
        />
        <p>{storeName}</p>
      </Link>
    </li>
  );
}

export default SingleStore;
