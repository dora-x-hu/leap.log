import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";

import { get } from "../../utilities";

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  //const [date, setDate] = useState();

  useEffect(() => {
    get("/api/responses", { day: 0, month: 0, year: 122 }).then((responsesObj) => {
      setEntries(responsesObj);
    });
    //print(entries);
  }, []);

  let entriesList = null;
  const hasEntries = entries.length !== 0;

  //let entriesList = ["here", "there", "everywhere"];

  if (hasEntries) {
    entriesList = entries.map((responseObj) => (
      <SingleEntry
        question={responseObj.question}
        content={responseObj.content}
        user_id={props.userId}
        day={responseObj.day}
        month={responseObj.month}
        year={responseObj.year}
      />
    ));
  } else {
    entriesList = "Start Journalling!";
  }

  return (
    //<section>{date}</section>
    //<section>{entries}</section>
    <section>{entriesList}</section>
  );
};

export default Day;
