import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import ErrorBoundary from "./error/ErrorBoundary";
import Login from "./pages/Loginpage";
import SignUp from "./pages/SignUpPage";
import Profile from "./pages/ProfilePage";
import FindPW from "./pages/FindPWPage";
import FindID from "./pages/FindIDPage";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/findpw" element={<FindPW />} />
          <Route path="/findid" element={<FindID />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
