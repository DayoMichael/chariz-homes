import * as types from "./types";

const initialState = {
    loggedInUser : {},
    listings: [],
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

        default:
            return state;
    }
}

export default AuthReducer