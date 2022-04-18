import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_STORE } from "../../utils/mutations";

import "./style.css";

function DeleteStoreButton({ storeID }) {
  // TODO: fix  mutations
  const {_id} = storeID

  const [RemoveStore, { error, loading, data }] = useMutation(DELETE_STORE);


  //TODO: implement RemoveStore mutation/DeleteThisStore function
  const deleteThisStore = async (event) => {
    try {
      const { data } = await RemoveStore({
        variables: "???"
      });
      // //TODO:create Delete store authentication
      // Auth.newMall(data.updateStore.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button
        // onClick={deleteStore()}
        onClick={() => deleteThisStore()}
        type="button"
      >
        Delete
      </button>
    </>
  );
}

export default DeleteStoreButton;
