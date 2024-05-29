
import { getToken } from "../../utils/appConfig";
import axiosInstance from "./axiosConfig";


export const postCall = async (url, data, params, headerConfig) => {

    let finalData;
    const token = getToken();
    finalData = data;
    headerConfig = Object.assign("");

    const config = {
        headers: {
            accessToken: `${token}`,
            ...headerConfig,
        },
        ...params,
    };
    console.log(config)
    const response = await axiosInstance.post(url, finalData, config)
    return response
};


export const getCall = async (url, params) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
        },
        ...params,
    };
    const response = await axiosInstance.get(url, config);
    return response
};

export const deleteCall = async (url, data) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
        },
        data: data || {},
    };
    // ENCRYPT DATA HERE
    const response = await axiosInstance.delete(url, config);
    return response;
};

export const authPutCall = async (url, data, params) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
        },
        ...params,
    };
    const response =  await axiosInstance.put(url, data, config);
    return response
};

export const authDeleteCall = async (url, data, params) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
        },
        ...params,
    };
    const response = await axiosInstance.delete(url, config);
    return response
};


export const getRequest = async ({ url }) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
        },
    };
    // ENCRYPT DATA HERE
    const response = await axiosInstance.get(url, config);
    return response?.data || response;
};

export const postFormCall = async (url, data, params, headerConfig) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
            ...headerConfig,
        },
        ...params,
    };
    const response = await axiosInstance.post(url, data, config);
    return response?.data || response
};

export const putFormCall = async (url, data) => {
    const config = {
        headers: {
            accessToken: `${getToken()}`,
        },
    };
    // ENCRYPT DATA HERE
    const response = await axiosInstance.put(url, data, config);
    return response?.data || response
};