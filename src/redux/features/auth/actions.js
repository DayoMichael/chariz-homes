import * as types from "./types";
import { createAccountUrl, LoginUrl, propertiesListingUrl } from "./api";
import { genericFailure, handleFailure, handleSuccess } from "../../../services/constants";
import { getCall, postCall } from "../../../services/networking/apiCalls";

export const loginUser = (requestData) => async (dispatch) => {
	try {
		dispatch({ type: types.CUSTOMER_LOGIN_STARTED });
		const response = await postCall(LoginUrl, requestData);
		const { status_code, data } = response || {}
		const showFailureToast = true;
        if(status_code  === 200){
            if(data && data?.success){
                dispatch({ type: types.CUSTOMER_LOGIN_SUCCESS, payload: data });
                return handleSuccess(data, "Logged in successfully", showFailureToast)
            }
            handleFailure(data?.message, showFailureToast);
        }
        handleFailure(data?.message, showFailureToast);
	} catch (error) {
		const { data } = error.response;
		dispatch({ type: types.CUSTOMER_LOGIN_FAILED });

		if (data?.message) {
			handleFailure(data?.message, true);
		} else {
			genericFailure();
		}

		return {
			status: false,
			data: data,
		};
	}
};

export const createUserAccount = (requestData) => async (dispatch) => {
	try {
		dispatch({ type: types.CUSTOMER_LOGIN_STARTED });
		const response = await postCall(createAccountUrl, requestData);
		const { status_code, data } = response || {}
		const showFailureToast = true;
        if(status_code  === 200){
            if(data && data?.success){
                dispatch({ type: types.CUSTOMER_LOGIN_SUCCESS, payload: data });
                return handleSuccess(data, "Logged in successfully", showFailureToast)
            }
            handleFailure(data?.message, showFailureToast);
        }
        handleFailure(data?.message, showFailureToast);
	} catch (error) {
		const { data } = error.response;
		dispatch({ type: types.CUSTOMER_LOGIN_FAILED });
		if (data?.data?.message) {
			handleFailure(data?.data?.message, true);
		} else {
			genericFailure();
		}

		return {
			status: false,
			data: data,
		};
	}
};

export const getPropertiesListing = () => async (dispatch) => {
	try {
		dispatch({ type: types.FETCH_LISTINGS_STARTED });
		const response = await getCall(propertiesListingUrl);
		const { status, data } = response || {}
		const showFailureToast = false;
		if(status  === 200){
            dispatch({ type: types.FETCH_LISTINGS_SUCCESS, payload: data?.listings});
            return handleSuccess(data, "Listings fetched successfully", showFailureToast)
        }
        handleFailure(data?.message, showFailureToast);
	} catch (error) {
		const { data } = error?.response;
		dispatch({ type: types.FETCH_LISTINGS_FAILED });
		if (data?.data?.message) {
			handleFailure(data?.data?.message, true);
		} else {
			genericFailure();
		}

		return {
			status: false,
			data: data,
		};
	}
};

