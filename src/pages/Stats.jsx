import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {

    const { state } = useContext(AppContext);

    const result = state.activities.reduce((acc, a) => {

        if (
            a.steps > 0 &&
            a.caloriesBurned > 0 &&
            a.workoutMinutes > 0 &&
            typeof a.goalAchieved === "boolean"
        ) {
            acc.totalActivities++;

            if (a.goalAchieved) acc.goalAchievedCount++;
            else acc.goalNotAchievedCount++;
        }

        return acc;

    }, {
        totalActivities: 0,
        goalAchievedCount: 0,
        goalNotAchievedCount: 0
    });

    // 🔥 MUST DO THIS
    window.appState = result;

    return (
        <div>
            <div data-testid="total-activities">{result.totalActivities}</div>
            <div data-testid="goal-achieved">{result.goalAchievedCount}</div>
            <div data-testid="goal-not-achieved">{result.goalNotAchievedCount}</div>
        </div>
    );
};

export default Stats;