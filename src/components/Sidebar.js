import React from "react";
import "./Sidebar.css";
import Faq from "./Faq";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-info">
        <div className="sidebar-title">Sidebar</div>
        <p className="sidebar-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          harum minus nihil necessitatibus! Voluptate maxime quis laudantium
          itaque, explicabo non ducimus dolorum eveniet consectetur, ut mollitia
          eaque quisquam facere aspernatur!
        </p>
        <Faq />
      </div>
    </div>
  );
};

export default Sidebar;
