import { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";
import { fetchToken, fetchActivities } from "../api/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const initialState = {
        activities: [],
        token: ""
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const loadData = async () => {
            try {
                const token = await fetchToken();

                console.log("TOKEN:", token);

                if (!token) {
                    console.log("NO TOKEN RECEIVED");
                    return;
                }

                const res = await fetchActivities(token);

                dispatch({
                    type: "SET_DATA",
                    payload: res
                });

            } catch (err) {
                console.log("API ERROR:", err);
            }
        };

        loadData();
    }, []);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};