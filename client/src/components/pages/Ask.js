import React, { Component, useEffect } from "react";
import { Router } from "@reach/router";

import { get, post } from "../../utilities";

const Ask = (props) => {
  useEffect(() => {}, []);

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

  return (
    <>
      <section>
        <label>journal prompt</label>
      </section>

      <section>
        <input type="text" id="askbox"></input>
      </section>
      <button
        onClick={() => submitStuff("new journal prompt", document.getElementById("askbox").value)}
      >
        Submit
      </button>
    </>

    // var askbox = document.getElementById("askbox")
  );
};

export default Ask;
