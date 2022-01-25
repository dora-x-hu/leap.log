import React, { Component, useEffect, useState } from "react";
import { Router } from "@reach/router";
import { get, post } from "../../utilities";

const Survey = (props) => {
  const submitSurvey = (daily, emotions, food, habits) => {
    // TODO

    console.log(daily + " " + emotions + " " + food + " " + habits);

    post("/api/category", {
      name: "daily",
      user_id: props.userId,
      isSelected: daily,
    });

    post("/api/category", {
      name: "emotions",
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
  };

  let completed;
  thisUser = User.findOne({ _id: props.userId }).then((thisuser) => {
    completed = thisuser.hasCompletedSurvey;
  });

  if (!completed) {
    return (
      <>
        <h1>What Topics Would You Like To Journal About?</h1>

        <div>
          <input type="checkbox" id="daily"></input>
          The day's events
        </div>

        <div>
          <input type="checkbox" id="emotions"></input>
          Emotions + Feelings
        </div>

        <div>
          <input type="checkbox" id="food"></input>
          Food
        </div>

        <div>
          <input type="checkbox" id="habits"></input>
          Habits
        </div>

        <div>
          <button
            onClick={() => {
              submitSurvey(
                document.getElementById("daily").checked,
                document.getElementById("emotions").checked,
                document.getElementById("food").checked,
                document.getElementById("habits").checked
              );
            }}
          >
            Submit
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>You already completed your preferences! Sorry!</h1>
      </>
    );
  }
};

export default Survey;
