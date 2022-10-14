import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Main.css";
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="components">
        <Menu />
        <Sidebar />
      </div>
    </>
  );
};

export default Main;
