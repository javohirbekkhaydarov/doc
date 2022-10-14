import React from "react";
import Toggle from "./Toggle";
const Faq = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <Toggle title="Can I learn programming from 0 on your platform?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quidem.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="How much do I have to pay per month?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quidem.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Is it possible to pay in full in one go?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quidem.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="If I buy the course, can my brother and I also study?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quidem.
            </p>
          </div>
        </div>
      </Toggle>
    </Faq>
  );
};

export default Faq;
