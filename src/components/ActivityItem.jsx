const ActivityItem = ({ activity }) => {
    return (
        <div data-testid="activity-item">
            <h3>{activity.name || "Unknown"}</h3>
            <p>Steps: {activity.steps}</p>
            <p>Calories: {activity.caloriesBurned}</p>
            <p>Minutes: {activity.workoutMinutes}</p>
            <p>
                Date: {activity.date || "No Date"}
            </p>
            <p>
                Goal: {activity.goalAchieved ? "Yes" : "No"}
            </p>
        </div>
    );
};

export default ActivityItem;