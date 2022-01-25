import React, { Component, useEffect, useState } from "react";
import "./SinglePrompt.css";

//props category and its prompts list
const SinglePrompt = (props) => {
  // const [content, setContent] = useState();
  // const [prompts, setPrompts] = useState([]);

  // for (let i = 0; i < props.prompts.length(); i++) {
  //   setPrompts(prompts.concat(props.prompts[i]));
  //   console.log(setPrompts);
  // }
  console.log("I am called");
  const content = () => {
    const prompts = [];
    if (props.prompts.length === 0) {
      console.log("i'm in content!");

      return <li>no prompts yet!</li>;
    } else {
      for (let i = 0; i < props.prompts.length; i++) {
        prompts.push(<li>{props.prompts[i].content}</li>);
      }
    }
    return prompts;
  };

  return (
    <>
      <div>
        <section className="SinglePrompt-heading1">{props.category_id}</section>
        <p className="SinglePrompt-paragraph">{content()}</p>
      </div>
    </>
  );
};
export default SinglePrompt;
