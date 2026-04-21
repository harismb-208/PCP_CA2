import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";


export const fetchToken = async () => {
    const response = await axios.post(
        "https://t4e-testserver.onrender.com/api/login",
        {
            studentId: "e0123031",
            set: "setB",
            password: "896201"
        }
    );

    console.log("LOGIN RESPONSE FULL:", response.data);

    return response.data.token;
};

console.log("LOGIN RESPONSE FULL:", JSON.stringify(response.data, null, 2));

return (
    response.data.token ||
    response.data.accessToken ||
    response.data.data?.token
);
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