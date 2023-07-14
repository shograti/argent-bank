import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {user ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/login" element={<SignIn />} />
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
