import React, { Component, useEffect, useState } from "react";
import { Router } from "@reach/router";

import { get, post } from "../../utilities";
import "./Ask.css";

import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const Ask = (props) => {
  useEffect(() => {}, []);

  // console.log("Hi");
  const [promptList, setPromptList] = useState([]);
  const [currentPromptIndex, setPrompt] = useState(0);
  //const [currentDate, setDate] =

  const [entriesList, setEntriesList] = useState([]);

  //const [inputText, setInputText] = useState(entriesList[currentPromptIndex].content);
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

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

  useEffect(() => {
    //document.title = "Daily";
    get("/api/responses", {
      day: props.day,
      month: props.month - 1,
      year: props.year,
      user_id: props.userId,
    }).then((responsesObj) => {
      setEntriesList(responsesObj);
      setInputText(responsesObj[currentPromptIndex].content);
    });
    //print(entries);
  }, [props.userId, props.day, currentPromptIndex]);

  const moveRight = () => {
    //setPrompt(currentPromptIndex + 1);
    // console.log(currentPromptIndex);
    // console.log(typeof currentPromptIndex);
    let newIndex = parseInt(currentPromptIndex) + 1;
    // console.log("newIndex: " + newIndex);

    setPrompt(newIndex);
    navigate(`/ask/${props.userId}/${props.day}/${props.month}/${props.year}/${newIndex}`);
    document.getElementById("askbox").value = "";
  };
  const moveLeft = () => {
    let newIndex = currentPromptIndex - 1;

    setPrompt(currentPromptIndex - 1);
    navigate(`/ask/${props.userId}/${props.day}/${props.month}/${props.year}/${newIndex}`);

    document.getElementById("askbox").value = "";
  };

  let questionList = [];

  useEffect(() => {
    get("/api/prompts", {
      user_id: props.userId,
    }).then((promptlistObj) => {
      setPromptList(promptlistObj);
    });
  }, [props.userId]);

  useEffect(() => {
    setPrompt(props.index);
  }, [props.index]);

  //useEffect(() => {
  questionList = promptList.map((promptObj) => {
    return promptObj.content;
  });

  if (questionList.length !== 0) {
    return (
      <>
        <section className="Ask-paragraph">
          <label>{String(questionList[currentPromptIndex])}</label>
        </section>

        {/* {console.log(questionList.length)} */}
        <section className="Ask-paragraph">
          <input
            type="text"
            id="askbox"
            placeholder="new journal entry here..."
            onChange={handleChange}
            value={inputText}
          ></input>
          <button
            className="Ask-button"
            onClick={() => {
              if (document.getElementById("askbox").value !== "") {
                submitStuff(
                  questionList[currentPromptIndex],
                  document.getElementById("askbox").value
                );
              }
              moveRight();
            }}
          >
            submit
          </button>
        </section>

        {currentPromptIndex > 0 ? (
          <section className="Ask-paragraph">
            <button className="Ask-button" onClick={() => moveLeft()}>
              prev question
            </button>
          </section>
        ) : (
          // nothing
          <section></section>
        )}

        {currentPromptIndex < promptList.length - 1 ? (
          <section className="Ask-paragraph">
            <button className="Ask-button" onClick={() => moveRight()}>
              next question
            </button>
          </section>
        ) : (
          // nothing
          <section></section>
        )}

        <section className="Ask-paragraph">
          <button className="Ask-button">
            <Link to={`/day/${props.userId}/${props.day}/${props.month}/${props.year}`}>
              back to daily
            </Link>
          </button>
        </section>
      </>
    );
  } else {
    return (
      <>
        <div className="Ask-paragraph">
          <p>no prompts yet! add prompts in profile</p>
          <button className="Ask-button">
            <Link to={`/profile/${props.userId}`}>profile</Link>
          </button>
        </div>
      </>
    );
  }

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
