import React from "react";
import { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div layout onClick={() => setToggle(!toggle)}>
      <h4 className="question">{title}</h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;