import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdTranslate } from "react-icons/md";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="logo"> react</div>
      <div className="lists">
        <ul>
          <li> Docs</li>
          <li> Tutorial</li>
          <li> Blog</li>
          <li> Community</li>
        </ul>
      </div>
      <div className="search">
        <AiOutlineSearch />
        <MdTranslate />
      </div>
    </nav>
  );
};

export default Navbar;
