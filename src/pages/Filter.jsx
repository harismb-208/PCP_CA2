import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filter = () => {

    const [value, setValue] = useState("");
    const { state } = useContext(AppContext);

    const filtered = state.activities.filter(a =>
        a.steps >= value &&
        a.steps > 0 &&
        a.caloriesBurned > 0 &&
        a.workoutMinutes > 0 &&
        typeof a.goalAchieved === "boolean"
    );

    return (
        <div>
            <input
                data-testid="filter-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {filtered.map(a => (
                <p key={a.activityId}>{a.name}</p>
            ))}
        </div>
    );
};

export default Filter;