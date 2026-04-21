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
                const data = await fetchActivities(token);

                dispatch({ type: "SET_DATA", payload: data });
            } catch (err) {
                console.log(err);
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