import Cookies from "js-cookie";

export const deleteToken = () => {
    Cookies.remove("HorizonAdminToken");
    Cookies.remove("HorizonAdminSessionInfo");
}

export const getToken = () => {
	let token = Cookies.get("HorizonAdminToken");
	if (token && !isSessionActive()) {
		return token
	}
	return null;
};

export const getSessionInfo = () => {
	let HorizonAdminSessionInfo = Cookies.get("HorizonAdminSessionInfo");
	if (HorizonAdminSessionInfo) {
		const appData = JSON.parse(HorizonAdminSessionInfo);
		return appData
	}
	return null;
};

export const isSessionActive = () => {
	const expire = Cookies.get("HorizonAdminToken");
	if (!expire) {
		return true;
	} else {
		return false;
	}
};