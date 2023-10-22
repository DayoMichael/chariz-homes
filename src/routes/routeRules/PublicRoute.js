import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../../utils/appConfig";
import PropTypes from "prop-types";
import { useEffect } from "react";

export function PublicRoute({ to, children }) {
    const token = getToken();
    const navigate = useNavigate()
    const goToDashboard = () => {
        navigate("/dashboard")
    }

    useEffect(() => {
        if(token){
            goToDashboard()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    return !token ? children : "";
}

PublicRoute.propTypes = {
    to: PropTypes?.any,
    children: PropTypes?.any,
};