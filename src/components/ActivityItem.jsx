import { Link } from "react-router-dom";

const ActivityItem = ({ activity }) => {

    const name = activity.name || "Unknown";
    const date = activity.date || "No Date";

    return (
        <div data-testid="activity-item">
            <Link to={`/activities/${activity.activityId}`}>
                <h3>{name}</h3>
            </Link>
            <p>{date}</p>
        </div>
    );
};

export default ActivityItem;