import React, { Component, useEffect, useState } from "react";
import { Router } from "@reach/router";

import { get, post } from "../../utilities";
import "./Ask.css";

const Ask = (props) => {
  useEffect(() => {}, []);

  const [promptList, setPromptList] = useState([]);
  const [currentPromptIndex, setPrompt] = useState(0);
  //const [currentDate, setDate] =

  const submitStuff = (thisQuestion, thisResponse) => {
    let d = new Date(); //this works with mongo

    post("/api/response", {
      question: thisQuestion,
      content: thisResponse,
      user_id: props.userId,
      day: props.day,
      month: props.month - 1,
      year: props.year,
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
      <section className="Ask-paragraph">
        <label>{String(questionList[currentPromptIndex])}</label>
      </section>

      <section className="Ask-paragraph">
        <input type="text" id="askbox"></input>
        <button
          className="Ask-button"
          onClick={() => {
            if (document.getElementById("askbox").value !== "") {
              submitStuff(
                questionList[currentPromptIndex],
                document.getElementById("askbox").value
              );
            }
          }}
        >
          Submit
        </button>
      </section>

      {currentPromptIndex > 0 ? (
        <section className="Ask-paragraph">
          <button className="Ask-button" onClick={() => moveLeft()}>
            Previous
          </button>
        </section>
      ) : (
        // nothing
        <section></section>
      )}

      {currentPromptIndex < promptList.length - 1 ? (
        <section className="Ask-paragraph">
          <button className="Ask-button" onClick={() => moveRight()}>
            Next
          </button>
        </section>
      ) : (
        // nothing
        <section></section>
      )}
    </>
  );

  if (currentPromptIndex === 0) {
    return (
      // ask box + next button only
      <>
        <section className="Ask-paragraph">
          <label>{String(questionList[currentPromptIndex])}</label>
        </section>

        <section className="Ask-paragraph">
          <input type="text" id="askbox"></input>
          <button
            className="Ask-button"
            onClick={() =>
              submitStuff("new journal prompt", document.getElementById("askbox").value)
            }
          >
            Submit
          </button>
        </section>

        <section className="Ask-paragraph">
          <button className="Ask-button" onClick={() => moveRight()}>
            Next
          </button>
        </section>
      </>
    );
  } else if (currentPromptIndex === promptList.length - 1) {
    return (
      // ask box + previous button only
      <>
        <section className="Ask-paragraph">
          <label>{String(questionList[currentPromptIndex])}</label>
        </section>

        <section className="Ask-paragraph">
          <input type="text" id="askbox"></input>
          <button
            className="Ask-button"
            onClick={() =>
              submitStuff("new journal prompt", document.getElementById("askbox").value)
            }
          >
            Submit
          </button>
        </section>

        <section className="Ask-paragraph">
          <button className="Ask-button" onClick={() => moveLeft()}>
            Previous
          </button>
        </section>
      </>
    );
  } else {
    return (
      // ask box + both buttons
      <>
        <section className="Ask-paragraph">
          <label>{String(questionList[currentPromptIndex])}</label>
        </section>

        <section className="Ask-paragraph">
          <input type="text" id="askbox"></input>
          <button
            className="Ask-button"
            onClick={() =>
              submitStuff("new journal prompt", document.getElementById("askbox").value)
            }
          >
            Submit
          </button>
        </section>

        <section className="Ask-paragraph">
          <button className="Ask-button" onClick={() => moveLeft()}>
            Previous
          </button>
        </section>
        <section className="Ask-paragraph">
          <button className="Ask-button" onClick={() => moveRight()}>
            Next
          </button>
        </section>
      </>
    );
  }
};

export default Ask;
