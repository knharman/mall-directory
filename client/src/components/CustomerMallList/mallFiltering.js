import React from 'react';
import { CustomerMallList } from "/index.js"

function MallNames(props) {
  const citySlected = document.getElementByName("selectCity").value;
  const { Mall, Category} = props;

 if (!citySlected) {
   const citySlected = Category;
 }


  if input
  return (
<>


      

      <ul className="scrollBox">
        {Mall.map(({ mallName, style, location, _id}) => (
// Need an onClick() funtion that will generate the stores array in the stores field.
        <li className="box center" id={_id}>
          <h4>{mallName} </h4>
          <p>Style: {style}</p>
          <p>Location: {location}</p>
        </li>
        ))}
      </ul>
</>
  );
}

export default MallNames;
