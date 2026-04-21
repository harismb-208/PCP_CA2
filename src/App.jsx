import { Routes, Route, Navigate } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import Filter from "./pages/Filter";
import Stats from "./pages/Stats";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* SIMPLE NAV */}
      <nav>
        <Link to="/activities">Activities</Link> |{" "}
        <Link to="/filter">Filter</Link> |{" "}
        <Link to="/stats">Stats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/activities" />} />

        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;