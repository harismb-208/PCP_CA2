import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";


export const fetchToken = async (password) => {
    const response = await axios.post(
        "https://t4e-testserver.onrender.com/api/login",
        { password }
    );

    console.log("TOKEN RESPONSE FULL:", response.data);


    return response.data.token || response.data.accessToken;
};


export const fetchActivities = async (token) => {
    const response = await axios.get(
        "https://t4e-testserver.onrender.com/api/private/activities",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    console.log("ACTIVITIES:", response.data);

    return response.data;
};