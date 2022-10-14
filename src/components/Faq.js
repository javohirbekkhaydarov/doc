import React, { useState } from "react";
import "./Faq.css";
import data from "../data";
const Faq = () => {
  const [option, setOption] = useState(null);
  const toggle = (index) => {
    if (option === index) {
      return setOption(null);
    }
    setOption(index);
  };
  return (
    <>
      <div className="wrapper">
        {data.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="title" onClick={() => toggle(index)}>
                <h2 className="con">{item.question}</h2>
                <span>{option == index ? "⬇" : "⬆"}</span>
              </div>
              <div
                className={
                  option == index ? "content-faq show" : "content-faq "

                }
              >
                {" "}
                {item.answear}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Faq;
