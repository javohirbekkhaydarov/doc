import React, { useState } from "react";
import "./Faq.css";
import data from "./json/data";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
const Faq = () => {
  const [option, setOption] = useState(null);
  const toggle = (index) => {
    if (option === index) {
      return setOption(null);
    }
    setOption(index);
  };

  const [arr, SetArr] = useState(data);
  return (
    <>
      <div className="wrapper">
        {arr.map((item, index) => (
          <div className="faq-name " key="index" onClick={() => toggle(index)}>
            <div className="title"
            >
              {item.name}
              <span>
                {option == index
                  ? <AiOutlineUp />
                  : <AiOutlineDown />}
                  
              </span>
            </div>
            {item.children.map((element) => {
              return (
                <li
                  typeof="number"
                  className={
                    option == index ? "content-faq show" : "content-faq "
                  }
                >
                  <span> {element.id}. </span>
                  {element.name}
                </li>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
