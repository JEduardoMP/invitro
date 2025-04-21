import React from "react";
import TopBar from "../components/TopBar/TopBar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <TopBar />
      <div
        style={{
          flex: 1,
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
