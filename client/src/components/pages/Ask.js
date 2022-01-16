import React, { Component, useEffect } from "react";
import { Router } from "@reach/router";

import { get, post } from "../../utilities";

const Ask = (props) => {
  useEffect(() => {}, []);

  const submitStuff = () => {
    let d = new Date(); //this works with mongo
    post("/api/response", {
      question: "meow",
      content: "content",
      user_id: props.userId,
      day: d.getDay(),
      month: d.getMonth(),
      year: d.getYear(),
    });
  };

  return (
    <>
      <section>
        <label>journal prompt</label>
      </section>

      <section>
        <input type="text"></input>
      </section>
      <button onClick={submitStuff}>Submit</button>
    </>
  );
};

export default Ask;
