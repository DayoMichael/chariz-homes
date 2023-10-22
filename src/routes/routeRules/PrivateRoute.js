import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../../utils/appConfig";
import PropTypes from "prop-types";
import { useEffect } from "react";

export function PrivateRoute({ to, children }) {
	const token = getToken();
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/")
    }

    useEffect(() => {
        if(!token){
            goToLogin()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])
	return token ? children : "";
}

PrivateRoute.propTypes = {
    to: PropTypes?.any,
    children: PropTypes?.any,
};