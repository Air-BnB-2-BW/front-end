import React from 'react'
import { GET_LISTINGS, CREATE_LISTING_SUCCESS, UPDATE_LISTING } from "./types";

const initialState = {
    listings: [],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LISTING_SUCCESS: {
            return {
                ...state, 
                listings: [...state.listings, action.payload.newListing]
            }
        }
        case GET_LISTINGS: {
            return {
                ...state,
                listings: [action.payload.listings]
            }
        }
        default:
            return state
    }
}