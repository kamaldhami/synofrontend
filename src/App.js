import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
