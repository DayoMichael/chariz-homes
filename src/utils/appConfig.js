import Cookies from "js-cookie";

export const deleteToken = () => {
    Cookies.remove("MezoAdminToken");
    Cookies.remove("MezoAdminSessionInfo");
}

export const getToken = () => {
	let token = Cookies.get("MezoAdminToken");
	if (token && !isSessionActive()) {
		return token
	}
	return null;
};

export const getSessionInfo = () => {
	let MezoAdminSessionInfo = Cookies.get("MezoAdminSessionInfo");
	if (MezoAdminSessionInfo) {
		const appData = JSON.parse(MezoAdminSessionInfo);
		return appData
	}
	return null;
};

export const isSessionActive = () => {
	const expire = Cookies.get("MezoAdminToken");
	if (!expire) {
		return true;
	} else {
		return false;
	}
};