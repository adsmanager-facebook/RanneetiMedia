// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Admin_Panel_Main from "./Components/Admin_Panel/Admin_Panel_Main";
import LoginPage_FB from "./Components/LoginPage_FB";
import Fetch_Excel_Data from "./Fetch_Excel_Data";
import Admin_Panel_Data from "./Components/Admin_Panel/Admin_Panel_Data";

function App() {
  const [userType, setUserType] = useState("");

  const handleLogin = (type) => {
    setUserType(type);
    
  };

  useEffect(() => {
    <Fetch_Excel_Data />
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userType === "admin" ? (
              <Admin_Panel_Main />
            ) : (
              <LoginPage_FB handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin-panel"
          element={
            userType === "admin" ? (
              <Admin_Panel_Data />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
