import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import ErrorBoundary from "./error/ErrorBoundary";
import Login from "./pages/Loginpage";
import SignUp from "./pages/SignUpPage";
import Profile from "./pages/ProfilePage";
import FindPW from "./pages/FindPasswordPage";
import FindID from "./pages/FindIDPage";
import FindAccount from "./pages/FindAccountPage";
import DeviceList from "./pages/DeviceList";
import NewsList from "./pages/NewsListPage";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgot-password" element={<FindPW />} />
          <Route path="/find-userid" element={<FindID />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userid/devices" element={<DeviceList />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/newslist" element={<NewsList />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
