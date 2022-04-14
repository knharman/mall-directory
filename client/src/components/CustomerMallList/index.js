import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MALLS } from "../../utils/queries";
import LocationFilter from "./LocationFilter";
import IndividualMall from "./IndividualMall";

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MALLS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function CustomerMallList() {
  const [state, dispatch] = useStoreContext();

  // TODO: figure out How to get element from other file.
  const slectedLocation = document.getElementByName('selectedCity');

  const { loading, data } = useQuery(QUERY_MALLS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_MALLS,
        malls: data.malls,
      });
      data.malls.forEach((mall) => {
        idbPromise("malls", "put", mall);
      });
    } else if (!loading) {
      idbPromise("malls", "get").then((malls) => {
        dispatch({
          type: UPDATE_MALLS,
          malls: malls,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterMalls() {
    if (!slectedLocation) {
      return state.malls;
    }

    return state.malls.filter((mall) => mall.location === slectedLocation);
  }

  return (
    <>
      <section>
        <div className="box margin50">
          <div className="box inline margin50">
            <h2 className="center">List of Malls</h2>
            <LocationFilter />
          </div>
          <ul className="scrollBox">
            {filterMalls().map((mall) => (
              <IndividualMall
                key={mall._id}
                _id={mall._id}
                style={mall.style}
                location={mall.location}
                store={[mall.store]}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default CustomerMallList;
