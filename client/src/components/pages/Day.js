import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";

import { get } from "../../utilities";

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  const [d, setDate] = useState(new Date());

  useEffect(() => {
<<<<<<< HEAD
    //const d = new Date();
    get("/api/responses", {
      day: d.getDay(),
      month: d.getMonth(),
      year: d.getFullYear(),
      user_id: props.userId,
    }).then((responsesObj) => {
      setEntries(responsesObj);
    });
=======
    get("/api/responses", { day: 0, month: 0, year: 122, user_id: props.userId }).then(
      (responsesObj) => {
        setEntries(responsesObj);
      }
    );
>>>>>>> 1077b3b13dde9fab2e5d78fe31758ebb07c3ee52
    //print(entries);
  }, [d]);

  const moveRight = () => {
    setDate(d.getDate() + 1);
    console.log(d);
  };

  const moveLeft = () => {
    setDate(d.getDate() - 1);
    console.log(d);
  };

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
    entriesList = "Start Journaling!";
  }

  if (!props.userId) {
    return <div>Log in before using journal</div>;
  } else
    return (
      //<section>{date}</section>
      //<section>{entries}</section>
      <div>
        <button onClick={moveRight}>Next Day</button>
        <button onClick={moveLeft}>Previous Day</button>
        <section>{entriesList}</section>
      </div>
    );
};

export default Day;
