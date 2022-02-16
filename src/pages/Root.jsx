import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Root() {
  return (
    <div className="Root">
      <Navbar />
      <Sidebar />
    </div>
  );
}
