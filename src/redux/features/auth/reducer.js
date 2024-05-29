import * as types from "./types";

const initialState = {
    loggedInUser : {},
    listings: [],
    propertyInView: {},
    bookingParam: {}
}

const AuthReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.CUSTOMER_LOGIN_SUCCESS:
            return {
                ...state,
                loggedInUser: payload
            };
        case types.FETCH_LISTINGS_SUCCESS:
            return {
                ...state,
                listings: payload
            };
        case types.FETCH_PROPERTY_DETAILS_SUCCESS:
            return {
                ...state,
                propertyInView: payload
            }
        case types.SET_BOOKING_PARAM: 
            return {
                ...state,
                bookingParam: payload
            }
        default:
            return state;
    }
}

export default AuthReducer