import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_STORES } from "../../utils/queries";
import CategoryFilter from "./CategoryFilter";
import IndividualStore from "./IndividualStore";
import CustomerMallList from "../CustomerMallList";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_STORES } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function CustomerStoreList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, stores } = useQuery(QUERY_STORES);

  // TODO: get and connect ID or Key from CustomerMallList
  const mallClicked = CustomerMallList.getElementById("TBD")

  const data = stores.filter((store) => store.MallId === mallClicked);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_STORES,
        stores: data.stores,
      });
      data.stores.forEach((store) => {
        idbPromise("stores", "put", store);
      });
    } else if (!loading) {
      idbPromise("stores", "get").then((stores) => {
        dispatch({
          type: UPDATE_STORES,
          stores: stores,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterStores() {
    if (!currentCategory) {
      return state.stores;
    }

    return state.stores.filter(
      (store) => store.category._id === currentCategory
    );
  }

  return (
    <>
      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">Name of Mall Selected</h2>
            <h3 className="center">Store Names</h3>
            <div className="center">
              <CategoryFilter />
            </div>
          </div>

          <ul className="scrollBox">
            {filterStores().map((store) => (
              <IndividualStore
                key={store._id}
                _id={store._id}
                mallID={store.mallID}
                image={store.image}
                name={store.StoreName}
                description={store.description}
                Url={store.Url}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CustomerStoreList;
