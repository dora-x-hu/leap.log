import React, { Component, useEffect, useState } from "react";
import { Router } from "@reach/router";

import { get, post } from "../../utilities";

const Ask = (props) => {
  useEffect(() => {}, []);

  const [promptList, setPromptList] = useState([]);
  const [currentPromptIndex, setPrompt] = useState(0);

  const submitStuff = (thisQuestion, thisResponse) => {
    let d = new Date(); //this works with mongo
    post("/api/response", {
      question: thisQuestion,
      content: thisResponse,
      user_id: props.userId,
      day: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear(),
    });
  };

  const moveRight = () => {
    setPrompt(currentPromptIndex + 1);
  };
  const moveLeft = () => {
    setPrompt(currentPromptIndex - 1);
  };

  let questionList = [];

  useEffect(() => {
    get("/api/prompts", {
      user_id: props.userId,
    }).then((promptlistObj) => {
      setPromptList(promptlistObj);
      //console.log(promptList[0].content);
    });
  }, [props.userId]);

  //useEffect(() => {
  questionList = promptList.map((promptObj) => {
    return promptObj.content;
  });
  //console.log(questionList[0] + "teehee");
  //}, [props.userId, promptList]);

  return (
    <>
      <section>
        <label>{String(questionList[currentPromptIndex])}</label>
      </section>

      <section>
        <input type="text" id="askbox"></input>
      </section>
      <button
        onClick={() => submitStuff("new journal prompt", document.getElementById("askbox").value)}
      >
        Submit
      </button>

      <section>
        <button onClick={() => moveLeft()}>Previous</button>
      </section>
      <section>
        <button onClick={() => moveRight()}>Next</button>
      </section>
    </>

    // var askbox = document.getElementById("askbox")
  );
};

export default Ask;
