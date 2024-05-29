import Cookies from "js-cookie";

export const deleteToken = () => {
    Cookies.remove("LacharizToken");
    Cookies.remove("LacharizUserData");
}

export const getToken = () => {
	let token = Cookies.get("LacharizToken");
	if (token) {
		return JSON.parse(token)
	}
	return null;
};

export const getSessionInfo = () => {
	let HorizonAdminSessionInfo = Cookies.get("LacharizUserData");
	if (HorizonAdminSessionInfo) {
		const appData = JSON.parse(HorizonAdminSessionInfo);
		return appData
	}
	return null;
};

export const isSessionActive = () => {
	const expire = Cookies.get("LacharizToken");
	if (!expire) {
		return true;
	} else {
		return false;
	}
};