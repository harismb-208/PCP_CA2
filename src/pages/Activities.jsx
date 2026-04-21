import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ActivityDetail = () => {
    const { id } = useParams();
    const { state } = useContext(AppContext);

    const activity = state.activities.find(
        (a) => String(a.activityId) === id
    );

    if (!activity) {
        return <p>Activity not found</p>;
    }

    const efficiency =
        activity.workoutMinutes > 0
            ? activity.caloriesBurned /
            activity.workoutMinutes
            : 0;

    return (
        <div>
            <h2>{activity.name}</h2>
            <p>Steps: {activity.steps}</p>
            <p>Calories: {activity.caloriesBurned}</p>
            <p>Minutes: {activity.workoutMinutes}</p>
            <p>Efficiency: {efficiency}</p>
        </div>
    );
};

export default ActivityDetail;