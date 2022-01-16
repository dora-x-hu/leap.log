import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";

import { get } from "../../utilities";

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  //const [date, setDate] = useState();

  useEffect(() => {
    get("/api/responses").then((responsesObj) => {
      setEntries(responsesObj);
    });
  }, []);

  let entriesList = null;
  const hasEntries = entries.length !== 0;

  if (hasEntries) {
    entriesList = entries.map((responseObj) => (
      <SingleEntry
        question={responseObj.question}
        content={responseObj.content}
        user_id={props.userId}
        day={responseObj.day}
      />
    ));
  } else {
    entriesList = "Start Journaling!";
  }

  return (
    //<section>{date}</section>
    <section>{entriesList}</section>
  );
};

export default Day;
