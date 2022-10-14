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
    <div className="content">
        <h1 className="start-font">Getting Started</h1>
      {posts.map((post) => {
        return (
          <>
            <section className="center" key={post.id}>
              <h1 className="title"> {post.title}</h1>
              <hr />
              <p className="text">{post.body}</p>
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
