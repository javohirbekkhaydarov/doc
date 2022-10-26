import React from "react";
import "./styles/Sidebar.css";
import Faq from "./Faq";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Faq />
      </div>
    </div>
  );
};

export default Sidebar;
