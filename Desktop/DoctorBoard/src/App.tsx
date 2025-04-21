// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Views/Home";
import Appointments from "./Views/Appointments";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="appointments" element={<Appointments />} />
      </Route>
    </Routes>
  );
};

export default App;