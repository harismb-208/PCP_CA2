import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";

// ✅ Get Token
export const fetchToken = async (password) => {
    const response = await axios.post(
        "https://t4e-testserver.onrender.com/api/auth",
        { password }
    );

    console.log("TOKEN RESPONSE:", response.data);

    return response.data.token;
};

// ✅ Get Activities (CORRECT ENDPOINT)
export const fetchActivities = async (token) => {
    const response = await axios.get(
        "https://t4e-testserver.onrender.com/api/activities",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    console.log("ACTIVITIES RESPONSE FINAL:", response.data);

    return response.data;
};