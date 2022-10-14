import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h1>Add React to a Website</h1>
      <div className="contanier">
        <div className="left">
          &copy; {new Date().getFullYear()}
          <span className="year">Copyright Meta Platforms, Inc.</span>
        </div>
        <div className="docs">
          <h3>docs</h3>
          <ul>
            <li>Installation</li>
            <li>Installation</li>
            <li>Installation</li>
            <li>Installation</li>
          </ul>
        </div>
        <div className="channels">
          <h3>channel</h3>
          <ul>
            <li>meta</li> <li>meta</li>
            <li>meta</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
