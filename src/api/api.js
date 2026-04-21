import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";

// 1. Get token
export const fetchToken = async (password) => {
    const res = await axios.post(`${BASE_URL}/auth`, {
        password: password,
    });
    return res.data.token;
};

// 2. Get activities (PRIVATE ENDPOINT)
export const fetchActivities = async (token) => {
    const res = await axios.get(`${BASE_URL}/activities`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    console.log("ACTIVITIES RESPONSE:", res.data); // 🔥 debug

    return res.data;
};