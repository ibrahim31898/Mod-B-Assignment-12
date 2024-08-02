import { useState } from "react";
import React from "react";
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
