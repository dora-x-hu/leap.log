import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";

import { get } from "../../utilities";

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  const [d, setDate] = useState(new Date());

  const moveRight = () => {
    let tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    //return d.getDate() + 1;
    setDate(tomorrow);
    //d.setDate(d.getDate() + 1);
    //console.log(d);
  };

  const moveLeft = () => {
    let tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
    //return d.getDate() + 1;
    setDate(tomorrow);
    //d.setDate(d.getDate() + 1);
    //console.log(d);
  };

  useEffect(() => {
    get("/api/responses", {
      day: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear(),
      user_id: props.userId,
    }).then((responsesObj) => {
      setEntries(responsesObj);
    });
  }, [d]);

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
        userId={props.userId}
      />
    ));
  } else {
    entriesList = "Start Journalling!";
  }

  if (props.userId === null) {
    return (
      <>
        <div>Log in before using journal</div>
      </>
    );
  } else
    return (
      <>
        <section>
          {String(d.getDate()) + "/" + String(d.getMonth()) + "/" + String(d.getFullYear())}
        </section>
        <div>
          <button onClick={() => moveRight()}>Next Day</button>
          <button onClick={() => moveLeft()}>Previous Day</button>
          <section>{entriesList}</section>
        </div>
      </>
    );
};

export default Day;
