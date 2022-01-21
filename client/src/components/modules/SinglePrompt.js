import React, { Component, useEffect, useState } from "react";
import "./SinglePrompt.css";

const SinglePrompt = (props) => {
  // const [content, setContent] = useState();

  return (
    <>
      <div>
        <section className="SinglePrompt-heading1">{props.category_id}</section>
        <p className="SinglePrompt-paragraph">{props.content}</p>
      </div>
    </>
  );
};
export default SinglePrompt;
