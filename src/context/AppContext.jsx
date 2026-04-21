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
                const token = await fetchToken("896201");

                const res = await fetchActivities(token);

                console.log("API FULL:", JSON.stringify(res, null, 2));

                const activitiesData =
                    res?.data?.activities ||
                    res?.activities ||
                    res?.data ||
                    [];

                dispatch({
                    type: "SET_DATA",
                    payload: activitiesData
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