import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Stats = () => {
    const { state } = useContext(AppContext);

    const activities = Array.isArray(state.activities)
        ? state.activities
        : [];

    const validActivities = activities.filter(
        (a) =>
            a &&
            a.steps > 0 &&
            a.caloriesBurned > 0 &&
            a.workoutMinutes > 0 &&
            typeof a.goalAchieved === "boolean"
    );

    const stats = validActivities.reduce(
        (acc, a) => {
            acc.totalActivities += 1;
            if (a.goalAchieved) acc.goalAchievedCount += 1;
            else acc.goalNotAchievedCount += 1;
            return acc;
        },
        {
            totalActivities: 0,
            goalAchievedCount: 0,
            goalNotAchievedCount: 0,
        }
    );

    // 🔥 GLOBAL STATE REQUIRED
    useEffect(() => {
        window.appState = stats;
    }, [stats]);

    return (
        <div>
            <p data-testid="total-activities">
                {stats.totalActivities}
            </p>

            <p data-testid="goal-achieved">
                {stats.goalAchievedCount}
            </p>

            <p data-testid="goal-not-achieved">
                {stats.goalNotAchievedCount}
            </p>
        </div>
    );
};

export default Stats;