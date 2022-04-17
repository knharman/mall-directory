import React from "react";


function MallArray(stores) {
  const { storeName, image, category, description, url } = stores;

  
  return (


  <li className="card px-1 py-1">
    
    <a onClick={}>
      <img src="assets/images/{category}.png" alt="Icon for store category"></img>
      <h1>{storeName}</h1>
      <p>{category}</p>
    </div>
    
    
    </li>
  )
}

export default MallArray;
