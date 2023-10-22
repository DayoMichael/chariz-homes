import * as types from "./types";
import { createAccountUrl, LoginUrl } from "./api";
import { genericFailure, handleFailure, handleSuccess } from "../../../services/constants";
import { postCall } from "../../../services/networking/apiCalls";

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