import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./error/ErrorBoundary";
import FindAccount from "./pages/FindAccountPage";
import DeviceAdd from "./pages/DeviceAddPage";
import LoginContainer from "./pages/loginpage/LoginContainer";
import SignUpContainer from "./pages/signup/SignUpContainer";
import FindIDPage from "./pages/findid/FindIdContainer";
import FindPasswordPage from "./pages/findpassword/FindPwContainer";
import TodoContainer from "./pages/todo/TodoContainer";
import HomeContainer from "./pages/home/HomeContainer";
import ProfilePage from "./pages/profile/ProfileContainer";
import DeviceList from "./pages/deviceList/DeviceListContainer";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<SignUpContainer />} />
          <Route path="/forgot-password" element={<FindPasswordPage />} />
          <Route path="/find-userid" element={<FindIDPage />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/adddevices" element={<DeviceAdd />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/todolist" element={<TodoContainer />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
