import React, { useEffect, useState } from "react";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import "./Menu.css";

const Menu = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  console.log("Posts", posts);

  return (
    <div className="content ">
      <h1 className="start-font">Getting Started</h1>
      <p className="content-info">
        {" "}
        This page is an overview of the React documentation and related
        resources.
      </p>
      <p className="content-text">
        <b>React</b> is a JavaScript library for building user interfaces. Learn
        what React is all about on<span> our homepage </span> or
        <span>in the tutorial.</span>
      </p>
      <div className="underline"></div>

      {/* unordered list */}
      <ul className="content-list">
        <li>
          <a href="!#"> Try React</a>
        </li>
        <li>
          <a href="!#"> Learn React</a>
        </li>{" "}
        <li>
          <a href="!#"> Staying Informed</a>
        </li>
        <li>
          <a href="!#"> Versioned Documentation</a>
        </li>
        <li>
          <a href="!#"> Something Missing?</a>
        </li>
      </ul>
      <div className="underline"></div>
      {posts.map((post) => {
        return (
          <>
            <section className="center" key={post.id}>
              <h1 className="title"> {post.title}</h1>
              
              <p className="text">{post.body}</p>
              <div className="underline"></div>
            </section>
          </>
        );
      })}
      <div className="useful">
        <p className="useful_text">
          this is useful
          <span className="icons">
            <AiFillDislike className="likeIcons" />
            <AiFillLike className="likeIcons" />
          </span>
          <span className="useful_edit">Edit this Page</span>
        </p>
      </div>
    </div>
  );
};

export default Menu;
