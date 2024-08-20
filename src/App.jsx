import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import ErrorBoundary from "./error/ErrorBoundary";
import Profile from "./pages/ProfilePage";
import FindPW from "./pages/FindPasswordPage";
import FindID from "./pages/FindIDPage";
import FindAccount from "./pages/FindAccountPage";
import DeviceList from "./pages/DeviceList";
import NewsList from "./pages/NewsListPage";
import DeviceAdd from "./pages/DeviceAddPage";
import TodoList from "./pages/TodoListPage";
import LoginContainer from "./pages/loginpage/LoginContainer";
import SignUpContainer from "./pages/signup/SignUpContainer";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<SignUpContainer />} />
          <Route path="/forgot-password" element={<FindPW />} />
          <Route path="/find-userid" element={<FindID />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userid/devices" element={<DeviceList />} />
          <Route path="/profile/:userid/adddevices" element={<DeviceAdd />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/newslist" element={<NewsList />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
