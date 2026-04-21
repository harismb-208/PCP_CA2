import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ActivityDetail = () => {

    const { id } = useParams();
    const { state } = useContext(AppContext);

    const activity = state.activities.find(a => a.activityId == id);

    if (!activity) return <p>Activity not found</p>;

    const efficiency =
        activity.workoutMinutes === 0
            ? 0
            : activity.caloriesBurned / activity.workoutMinutes;

    return (
        <div>
            <h2>{activity.name}</h2>
            <p>Efficiency: {efficiency}</p>
        </div>
    );
};

export default ActivityDetail;