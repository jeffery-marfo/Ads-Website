import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import DashBar from "../components/DashBar";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="">
        <Sidebar />
        <div className="ml-60  flex flex-col">
          <DashBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
