import React from "react";
import { SEO } from "../../components";
import { Outlet, Routes, Route } from "react-router-dom";
import CarbonDetail from "./CarbonDetail";
import AllCredits from "./AllCredits";

function CarbonCredits() {
  return (
    <React.Fragment>
      <SEO title="Carbon Credits" />
      <Outlet />
      <Routes>
        <Route path="" element={<AllCredits />} />
        <Route path=":id" element={<CarbonDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default CarbonCredits;
