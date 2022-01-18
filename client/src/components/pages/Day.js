import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";
import "./Day.css";
import { get } from "../../utilities";

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  const [d, setDate] = useState(new Date());
  const [entriesList, setEntriesList] = useState(null);
  const [promptsList, setPromptsList] = useState([]);

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

  //const toAsk = (promptObj) => {
  // TODO: take user to Ask.js
  //};

  useEffect(() => {
    document.title = "Daily";
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

  useEffect(() => {
    get("/api/prompts", {
      user_id: props.userId,
    }).then((promptlistObj) => {
      setPromptsList(promptlistObj);
    });
  }, [props.userId]);

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
      // TODO: put a button hear that leads to Ask; make this button lead to the 1st prompt for "Start Journalling!"
      /*askButton = 
        <>
          <button
          //onClick={() => {
          //toAsk(promptsList[0]);
          //}}
          >
            <a href="/ask">Start Journalling!</a>
          </button>
        </>
      */ setEntriesList("");
    }
  }, [entries]);

  useEffect(() => {
    console.log(entriesList);
  }, [entriesList]);

  if (!props.userId) {
    return (
      <>
        <div className="Day-heading1">Log in before using journal</div>
      </>
    );
  } /*else if (entries.length !== 0) {
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
  }*/ else {
    if (entriesList === "") {
      return (
        <button>
          <a className="Day-paragraph" href="/ask">
            Start Journalling!
          </a>
        </button>
      );
    } else {
      return (
        <>
          <section className="Day-paragraph">
            {String(d.getDate()) + "/" + String(d.getMonth() + 1) + "/" + String(d.getFullYear())}
          </section>
          <div className="Day-paragraph">
            <button onClick={() => moveRight()}>Next Day</button>
            <button onClick={() => moveLeft()}>Previous Day</button>
            <section>{entriesList}</section>
          </div>
        </>
      );
    }
  }
};

export default Day;
