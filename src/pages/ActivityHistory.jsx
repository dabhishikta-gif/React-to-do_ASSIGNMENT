import { useEffect, useState } from "react";
import api from "../api";

export default function ActivityHistory() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/activities")
      .then((res) => setActivities(res.data))
      .catch(() => alert("Error loading activity history"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (activities.length === 0) return <p>No activity yet.</p>;

  return (
    <div>
      <h2>Activity History</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.description} —{" "}
            <small>{activity.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
