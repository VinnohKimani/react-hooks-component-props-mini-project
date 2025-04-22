import React from "react";

const Article = ({
  title = "No title",
  date = "January 1, 1970",
  preview = "No preview available",
}) => {

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
