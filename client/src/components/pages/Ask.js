import React, { Component, useEffect } from "react";
import { Router } from "@reach/router";

import { get, post } from "../../utilities";

const Ask = (props) => {
  useEffect(() => {}, []);

  const submitStuff = () => {
    post("/api/response", {
      question: "question",
      content: "content",
      user_id: props.user_id,
      day: new Date(),
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
