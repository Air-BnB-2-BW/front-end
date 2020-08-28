import React from 'react'
import { GET_LISTINGS, CREATE_LISTING_SUCCESS, UPDATE_LISTING, DELETE_LISTING } from "./types";

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
        case UPDATE_LISTING: {
            return {
                ...state, 
                listings: state.listings.map(listing => {
                    if (listing.id === action.payload.id) return action.payload
                    else return listing
                })
            }
        }
        case DELETE_LISTING: {
            return {
                ...state,
                listings: state.listings.filter(({ id }) => id !== action.payload.id)
            }
        }
        default:
            return state
    }
}