import * as types from "./types";
import { activateAccountUrl, createAccountUrl, LoginUrl, propertiesListingUrl } from "./api";
import { genericFailure, handleFailure, handleSuccess } from "../../../services/constants";
import { getCall, postCall } from "../../../services/networking/apiCalls";

const successConstruct = [200, 201]

export const loginUser = (requestData) => async (dispatch) => {
	try {
		dispatch({ type: types.CUSTOMER_LOGIN_STARTED });
		const response = await postCall(LoginUrl, requestData);
		const { status, data } = response || {}
		const showFailureToast = true;
		if(successConstruct.includes(status) && data?.accessToken){
			dispatch({ type: types.CUSTOMER_LOGIN_SUCCESS, payload: data });
			return handleSuccess(data, "Logged in successfully", showFailureToast)
        }
        return handleFailure(data?.message, showFailureToast);
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
		dispatch({ type: types.CUSTOMER_SIGNUP_STARTED });
		const response = await postCall(createAccountUrl, requestData);
		const { status, data } = response || {}
		console.log(response)
		const showFailureToast = true;
		
        if(successConstruct.includes(status)){
			dispatch({ type: types.CUSTOMER_SIGNUP_SUCCESS, payload: data });
			return handleSuccess(data, data?.message, showFailureToast)
        }
        return handleFailure(data?.message, showFailureToast);
	} catch (error) {
		const { data } = error.response;
		dispatch({ type: types.CUSTOMER_SIGNUP_FAILED });
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

export const activateUserAccount = (requestData) => async (dispatch) => {
	try {
		dispatch({ type: types.CUSTOMER_ACTIVATION_STARTED });
		const response = await postCall(activateAccountUrl, requestData);
		const { status, data } = response || {}
		console.log(response)
		const showFailureToast = true;
        if(successConstruct.includes(status)){
			dispatch({ type: types.CUSTOMER_ACTIVATION_SUCCESS, payload: data });
			return handleSuccess(data, data?.message, showFailureToast)
        }
        return handleFailure(data?.message, showFailureToast);
	} catch (error) {
		const { data } = error.response;
		dispatch({ type: types.CUSTOMER_ACTIVATION_FAILED });
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

export const getPropertyDetails = (id) => async (dispatch) => {
	const url = `${propertiesListingUrl}/${id}`
	try {
		dispatch({ type: types.FETCH_LISTINGS_STARTED });
		const response = await getCall(url);
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

