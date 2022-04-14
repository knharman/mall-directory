import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MALLS, QUERY_STORES, QUERY_CATEGORIES} from "../utils/queries";

function CustomerStoreList() {
  const { Mall } = useQuery(QUERY_MALLS);
  const { Store } = useQuery(QUERY_STORES);
  const { Categories } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch to update the state with the UPDATE_CATEGORIES action
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    // also store the category data in IndexedDB
    categoryData.categories.forEach(category => {
      idbPromise('categories', 'put', category);
    });
    } else if (!loading) {
      // if the user is offline, load data from IndexedDB
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch])

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

return (
<>
<section>
        <div className="box margin50">
  <div className="box inline margin50">
    <h2 className="center">Name of Mall Selected</h2>
    <h3 className="center">Store Names</h3>
      <div className="center">
        <input className="center" list="select" name="select" placeholder="Select A Category"></input>
        <datalist className="center" id="select">  

        {Categories.map((name) => (
                  <option key={category._id}
                  onClick={() => {
                    handleSelection(category._id);
                  }} value={name}></option>
                ))}   

        </datalist>
      </div>


</div>


        <ul className="scrollBox">
            {Store.map(({ mallName, style, location, _id }) => (
              // TODO: create an onClick() funtion that will generate the modal with required fields.
              <li className="box center" id={_id}>
                <h4>{mallName} </h4>
                <p>Style: {style}</p>
                <p>Location: {location}</p>
              </li>

              <li className="box center" id={_id}>
              <img className="icon" src={`/assets/images/${category.name}.jpg`} alt="icon of store">
              <a className="center" href="#">Store Name</a>
            </li>
            ))}
          </ul>


          </div>
          </section>
</>
)
};

export default CustomerStoreList;




 <!-- This will be inside of a scroll box -->
   <!-- ************    Start of scorll box     ***********-->
 <div>
   <ul className="noStyle">
     
     <li className="box center" id="myBtn2">
       <img className="icon" src="assets/images/icon.jpg" alt="icon of store">
       <a className="center" href="#">Store Name</a>
     </li>
     <li className="box center" id="myBtn3">
       <img className="icon" src="assets/images/icon.jpg" alt="icon of store">
       <a className="center" href="#">Store Name</a>
     </li>
     <li className="box center">
       <img className="icon" src="assets/images/icon.jpg" alt="icon of store">
       <a className="center" href="#">Store Name</a>
     </li>
     <li className="box center">
       <img className="icon" src="assets/images/icon.jpg" alt="icon of store">
       <a className="center" href="#">Store Name</a>
     </li>
     <li className="box center">
       <img className="icon" src="assets/images/icon.jpg" alt="icon of store">
       <a className="center" href="#">Store Name</a>
     </li>
     <li className="box center">
       <img className="icon" src="assets/images/icon.jpg" alt="icon of store">
       <a className="center" href="#">Store Name</a>
     </li>
   </ul>
   </div>
 </div>
 <!-- ************    End of scorll box     ***********-->

   <!-- *************     End of Store names displayed       ********** -->
 </div>

 </section>