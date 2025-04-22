import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const props = blogData;
  console.log(props);
  return (
    <div className="App">
      <Header name={props.name} />
      <About about={props.about} image={props.image} />
      <ArticleList posts={props.posts} />
      You're on your own from here! Follow
      the deliverables; test things out in the browser as you write your code;
      and good luck!
    </div>
  );
}

export default App;
