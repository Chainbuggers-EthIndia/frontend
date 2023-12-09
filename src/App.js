import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import AuditorPage from "./pages/AuditorPage";
import EstimatorPage from "./pages/EstimatorPage";
import UserPage from "./pages/UserPage";
import CompanyPage from "./pages/CompanyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/adash" element={<AuditorPage />} />
        <Route exact path="/edash" element={<EstimatorPage />} />
        <Route exact path="/register" element={<UserPage />} />
        <Route exact path="/udash" element={<CompanyPage />} />

      </Routes>
    </BrowserRouter>

  );
}
