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

                // 🔥 CRITICAL FIX

                console.log("API RESPONSE:", res);

                const activitiesData =

                    res.activities || res.data || res;

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