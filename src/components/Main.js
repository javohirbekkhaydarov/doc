import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Main.css";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="centered">
        <Menu />
        <Sidebar />
      </div>
        <Footer />
    </>
  );
};

export default Main;
