import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SurveyCreation from "../pages/surveycreation";
import ProblemRaisorDashboard from "../pages/Problemraisordashboard/problemraisordashboard";
import SupervisorDashboard from "../pages/superviserdashboard"; // Added missing import

export default function Routernav() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/survey" element={<SurveyCreation />} />
      <Route path="/Problemrd" element={<ProblemRaisorDashboard />} />
      <Route path="/Superviser" element={<SupervisorDashboard />} />
    </Routes>
  );
}