import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ActivityItem from "../components/ActivityItem";

const Activities = () => {
    const { state } = useContext(AppContext);


    const activities = Array.isArray(state.activities)
        ? state.activities
        : [];


    const validActivities = activities.filter((a) =>
        a &&
        a.steps > 0 &&
        a.caloriesBurned > 0 &&
        a.workoutMinutes > 0 &&
        typeof a.goalAchieved === "boolean"
    );

    if (!activities.length) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {validActivities.map((activity) => (
                <ActivityItem
                    key={activity.activityId}
                    activity={activity}
                />
            ))}
        </div>
    );
};

export default Activities;