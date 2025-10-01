import React from "react";
import { Outlet } from "react-router-dom";
import Navcomp from "./Navcomp";

const MainDashboard = () => {
  return (
    <div>
      <h1>MainDashboard</h1>
      <div className="container mt-3">
        <div className="card border-primary">
          <div className="card-header border-primary">
            <Navcomp />
          </div>
          <div className="card-body border-primary">
            <Outlet />
          </div>
          <div className="card-footer border-primary">
            <p className="">This app is design and develope by Sumit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
