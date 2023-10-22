import * as types from "./types";

const initialState = {
    loggedInUser : {}
}

const AuthReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.CUSTOMER_LOGIN_SUCCESS:
            return {
                ...state,
                loggedInUser: payload
            };
        default:
            return state;
    }
}

export default AuthReducer