import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from "../../../utils/queries";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../../../utils/actions";
import { idbPromise } from "../../../utils/helpers";
import { useStoreContext } from '../../../utils/GlobalState';

function CategoryFilter() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleChange = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h4>Filter by Category:</h4>
      <input
      
        className="center"
        list="select"
        name="selectCategory"
        placeholder="Select A Category">
      </input>
      {/* Maps over categories for drop down filtering */}
      <datalist className="center" id="select">
        {categories.map(type => (
          <option
            value={type.name}
            onChange={() => {
              handleChange(type._id);
            }}
          >
          </option>
         ))}
      </datalist>
    </div>
  );
}

export default CategoryFilter;