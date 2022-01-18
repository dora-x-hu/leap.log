import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";

import { get } from "../../utilities";

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  const [d, setDate] = useState(new Date());
  const [entriesList, setEntriesList] = useState(null);

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
    document.title = "Profile Page";
    get("/api/responses", {
      day: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear(),
      user_id: props.userId,
    }).then((responsesObj) => {
      setEntries(responsesObj);
    });
    //print(entries);
  }, [d, props.userId]);

  //let entriesList = ["here", "there", "everywhere"];

  // add useEffect() statement for this
  useEffect(() => {
    console.log(entries.length);
    const hasEntries = entries.length !== 0;

    if (hasEntries) {
      setEntriesList(
        entries.map((responseObj) => (
          <SingleEntry
            question={responseObj.question}
            content={responseObj.content}
            user_id={props.userId}
            day={responseObj.day}
            month={responseObj.month}
            year={responseObj.year}
            userId={props.userId}
          />
        ))
      );
    } else {
      setEntriesList("Start Journalling!");
    }
  }, [entries]);

  useEffect(() => {
    console.log(entriesList);
  }, [entriesList]);

  if (!props.userId) {
    return (
      <>
        <div>Log in before using journal</div>
      </>
    );
  } else
    return (
      <>
        <section>
          {String(d.getDate()) + "/" + String(d.getMonth() + 1) + "/" + String(d.getFullYear())}
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
