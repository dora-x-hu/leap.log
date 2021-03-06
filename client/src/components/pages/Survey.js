import React, { Component, useEffect, useState } from "react";
import { Router } from "@reach/router";
import { get, post } from "../../utilities";
import { navigate } from "@reach/router";

import "./Survey.css";

const Survey = (props) => {
  const [completed, setCompleted] = useState(false);
  const submitSurvey = (daily, emotions, food, habits) => {
    // TODO

    console.log(daily + " " + emotions + " " + food + " " + habits);

    post("/api/category", {
      name: "daily",
      user_id: props.userId,
      isSelected: daily,
    });

    post("/api/category", {
      name: "feels",
      user_id: props.userId,
      isSelected: emotions,
    });

    post("/api/category", {
      name: "habits",
      user_id: props.userId,
      isSelected: habits,
    });

    post("/api/category", {
      name: "food",
      user_id: props.userId,
      isSelected: food,
    });

    props.setCompletionStatus();

    post("/api/survey", {
      userId: props.userId,
    });

    navigate(`/profile/${props.userId}`);
  };

  useEffect(() => {
    // let completed;
    // get request
    // console.log("calling get");

    get("/api/user").then((thisuser) => {
      setCompleted(thisuser.hasCompletedSurvey);
      // console.log(`has completed: ${thisuser.hasCompletedSurvey}`);
    });
    // console.log("completed: " + completed);
  }, [props.userId]);

  const renderSurvey = () => {
    if (!completed) {
      return (
        <>
          <h1 className="SinglePrompt-heading1">what topics would you like to journal about?</h1>
          <div className="SinglePrompt-paragraph">
            <input type="checkbox" id="daily"></input>
            {} the day's events{}
          </div>

          <div className="SinglePrompt-paragraph">
            <input type="checkbox" id="emotions"></input>
            {} emotions + feelings{}
          </div>

          <div className="SinglePrompt-paragraph">
            <input type="checkbox" id="food"></input>
            {} food{}
          </div>

          <div className="SinglePrompt-paragraph">
            <input type="checkbox" id="habits"></input>
            {} habits{}
          </div>

          <div className="SinglePrompt-paragraph">
            <button
              className="Survey-button"
              onClick={() => {
                submitSurvey(
                  document.getElementById("daily").checked,
                  document.getElementById("emotions").checked,
                  document.getElementById("food").checked,
                  document.getElementById("habits").checked
                );
              }}
            >
              submit
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1 className="Profile-preferences">You already completed your preferences! Sorry!</h1>
        </>
      );
    }
  };

  return <>{renderSurvey()}</>;
};

export default Survey;
