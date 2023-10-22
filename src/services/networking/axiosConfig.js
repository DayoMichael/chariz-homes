import axios from "axios";
import { deleteToken } from "../../utils/appConfig";

const baseURL = "https://phplaravel-440963-3389902.cloudwaysapps.com/api";

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest",
		"Access-Control-Allow-Origin": "*",
		"crossorigin": "true",
		"X-Frame-Options": "DENY",
		"Credentials": "same-origin",
	},
});

// DELETE EXPIRED TOKEN
axiosInstance.interceptors.response.use(
	function (response) {
		if (response.status === 401) {
			deleteToken();
            window.location.href = "/"
            return
		} else {
			return response;
		}
	},
	function (error) {
		if(error.toJSON().message === 'Network Error'){
			const internetErrorMessage = "Your internet connection might be offline. Please, check and try again"
			return {
				data: {
					message: internetErrorMessage
				},
				status: false,
				message: internetErrorMessage
			}
		}
		if (error.response.status === 401) {
			deleteToken();
		} else {
			return Promise.reject(error);
		}
	},
);

export default axiosInstance;