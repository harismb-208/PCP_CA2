import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";


export const fetchToken = async (password) => {
    const response = await axios.post(`${BASE_URL}/login`, {
        password,
    });

    console.log("TOKEN RESPONSE:", response.data);

    return response.data.token;
};


export const fetchActivities = async (token) => {
    const response = await axios.get(
        `${BASE_URL}/private/activities`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    console.log("ACTIVITIES RESPONSE FINAL:", response.data);

    return response.data;
};