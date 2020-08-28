import * as api from "../api";

import { GET_LISTINGS, CREATE_LISTING_SUCCESS, UPDATE_LISTING } from "./types";

export const getListings = () => {
  async function thunk(dispatch) {
    try {
      const listings = await api.getListings();
      dispatch({ type: GET_LISTINGS, payload: { listings } });
    } catch (error) {
      console.log("error creating listing", error);
    }
  }
  return thunk;
};

export const createListing = (args) => {
  return async (dispatch) => {
      return dispatch({ type: CREATE_LISTING_SUCCESS, payload: { newListing: args } })
    try {
      const newListing = await api.createListing(args);
      dispatch({ type: CREATE_LISTING_SUCCESS, payload: { newListing } });
    } catch (error) {
      console.log("error creating listing", error);
    }
  };
};
