import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MALLS } from '../utils/queries';

function CustomerMallList() {

  const { Mall } = useQuery(QUERY_MALLS);
 const style = Mall.style
  return (
<>
  <section>
    <div className="box margin50">
      <div className="box inline margin50">
        <h2 className="center">List of Malls</h2>
        <div className="center">
          <input className="center" list="select" name="selectCity" placeholder="Select A Category"></input>
          <datalist className="center" id="select">  
              <option value="Plaza" ></option>
              <option value="Strip Mall1"></option>
              <option value="Shopping Center"></option>
          </datalist>
        
        {/* This is saved for updating to location
          <datalist className="center" id="select">  
            {location.map(({ name }) => (
              <option value={ name }></option>
              ))}
          </datalist> */}
        
        
        </div>
      </div>
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
    </div>
  </section>
</>
  );
}

export default CustomerMallList;
