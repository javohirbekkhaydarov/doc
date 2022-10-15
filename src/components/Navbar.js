import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdTranslate } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav id="nav">
        <div id="top-nav">
          Try out a preview of the new React Docs! 👉{" "}
          <a href="https://beta.reactjs.org/"> beta.reactjs.org</a>
        </div>
        <div className="container">
          <a href="https://reactjs.org" className="logo">
            <FaReact className="FaReact" />
            react
          </a>
          <div className="lists">
            <ul>
              <li>
                {" "}
                <a href="#">Docs</a>
              </li>
              <li>
                {" "}
                <a href="#">Tutorial</a>
              </li>
              <li>
                {" "}
                <a href="#">Blog</a>
              </li>
              <li>
                {" "}
                <a href="#">Community</a>
              </li>
            </ul>
          </div>

          <div className="search-box">
            <input
              onClick={`.icon-active`}
              class="search-input"
              type="text"
              name="search"
              placeholder="      search..."
            />
            <a href="!# " className="search-btn">
              <AiOutlineSearch className="search-icon" />
            </a>
          </div>
          {/* versions */}
          <div className="versions">
            <select name="version" id="version">
              <option value="v16.0.0">
                {" "}
                <a href=""> v18.2.0</a>
              </option>
              <option value="v15.0.0">
                {" "}
                <a href=""> v18.2.0</a>
              </option>
              <option value="v14.0.0">
                {" "}
                <a href=""> v18.2.0</a>
              </option>
              <option value="v13.0.0">
                {" "}
                <a href=""> v18.2.0</a>
              </option>
            </select>
          </div>
          <div className="languages">
            <MdTranslate /> Languages
          </div>
          <div className="github">
            <a href="github.com">
              github &nbsp;
              <GrShare style={{ color: "gray" }} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
