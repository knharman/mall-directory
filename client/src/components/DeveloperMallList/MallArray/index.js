import React from "react";


function MallArray(item) {
  const { name } = item;

  return (
  <li className="card px-1 py-1">name: {name}</li>
  )
}

export default MallArray;
