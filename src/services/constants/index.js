import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const genericFailure = () => {
    const errorMessage = "Sorry, there was a problem. Please try again.";
    toast.warn(errorMessage, {
        autoClose: 5000, position: "bottom-center", hideProgressBar: false, closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return { status: false, message: errorMessage };
};

export const handleFailure = (message, showToast) => {
    const errorMessage = message ? message : "Sorry, there was a problem. Please try again.";
    if (showToast) {
        toast.warn(errorMessage, {
            autoClose: 5000, position: "bottom-center", hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return {
        status: false,
        message: errorMessage,
    };
};

export const handleSuccess = (data, message, showToast) => {
    if (showToast) {
        toast.success(message, {
            autoClose: 5000, position: "bottom-center", hideProgressBar: false, closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return {
        status: true,
        message: message,
        data: data,
    };
};