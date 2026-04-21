import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";

// GET TOKEN
export const fetchToken = async (password) => {
    const res = await axios.post(`${BASE_URL}/auth`, {
        password
    });
    return res.data.token;
};

// GET ACTIVITIES (FIX THIS)
export const fetchActivities = async (token) => {
    const res = await axios.get(`${BASE_URL}/activities`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};