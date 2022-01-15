import React, { Component, useEffect } from "react";
import { Router } from "@reach/router";

const Ask = (props) => {
  useEffect(() => {}, []);

  const submitStuff = () => {
    post("/api/journalEntry", {
      question: "question",
      content: "content",
      user_id: props.user_id,
      day: new Date(),
    });
  };

  return (
    <>
      <form>
        <section>
          <label>journal prompt</label>
        </section>

        <section>
          <input type="text"></input>
        </section>
        <input type="submit" value="Submit" onClick={submitStuff}></input>
      </form>
    </>
  );
};

export default Ask;
