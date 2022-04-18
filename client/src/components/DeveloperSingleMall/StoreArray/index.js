import React from "react";


function MallArray(stores) {
  const { storeName, category, description, url } = stores;

  const image = category.substr(0, 3)
  
  return (


  <div className="card px-1 py-1">
    
      <img src={`../../assets/images/${image}`} alt={storeName}></img>
      <h1>{storeName}</h1>
      <p>{category}</p>
     
    </div>
  )
}

export default MallArray;
