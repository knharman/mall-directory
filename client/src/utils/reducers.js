import { useReducer } from "react";
// import actions
import {
  UPDATE_STORES,
  UPDATE_MALLS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  OPEN_MODAL,
} from './actions';

// Set default state  
// const defaultState = {
//   stores: [],
//   categories: [],
//   currentCategory: '',
//   modal: false,
//   malls:''
// }

// Root reducer
export const reducer = (state, action) => {
  switch (action.type) {
      // if the action type value is the value of `UPDATE_STORES`, return a new state object with an updated stores array
      case UPDATE_STORES:
          return {
              ...state,
              stores: [...action.stores],
          };
                // if the action type value is the value of `UPDATE_MALLS`, return a new state object with an updated malls array
      case UPDATE_MALLS:
        return {
            ...state,
            malls: [...action.malls],
        };
      // if the action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
      case UPDATE_CATEGORIES:
          return {
              ...state,
              categories: [...action.categories]
          };
      // if the action type value is the value of `UPDATE_CURRENT_CATEGORY`, return a new state object with an updated currentCategory value
      case UPDATE_CURRENT_CATEGORY:
          return {
              ...state,
              currentCategory: action.currentCategory
          };
      // if the action type is OPEN_MODAL, return a new state object with the updated cart object
      case OPEN_MODAL:
          return {
            ...state,
            modalOpen: true,
            modal: [...state.modal, action.store]  
          };
      // if it's none of these actions, do not update the state and just return the current state
      default:
          return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}