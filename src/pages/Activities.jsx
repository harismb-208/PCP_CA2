import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const Activities = () => {

    const { state } = useContext(AppContext);

    const validActivities = (state.activities || []).filter(a =>
        a.steps > 0 &&
        a.caloriesBurned > 0 &&
        a.workoutMinutes > 0 &&
        typeof a.goalAchieved === "boolean"
    );

    return (
        <div>
            {validActivities.map(a => (
                <ActivityItem key={a.activityId} activity={a} />
            ))}
        </div>
    );
};

export default Activities;