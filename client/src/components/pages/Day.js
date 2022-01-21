import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";
import "./Day.css";
import { get } from "../../utilities";
import DayGrid from "../modules/DayGrid";
import { Link } from "@reach/router";

const Day = (props) => {
  console.log(props.currentYear);
  console.log(props.currentMonth);
  console.log(props.currentDate);

  const [entries, setEntries] = useState([]);
  const [d, setDate] = useState(
    new Date(props.currentYear, props.currentMonth - 1, props.currentDate)
  );
  const [entriesList, setEntriesList] = useState(null);
  const [promptsList, setPromptsList] = useState([]);
  const current = new Date();

  const moveRight = () => {
    let tomorrow = new Date(props.year, props.month - 1, props.day + 1);
    setDate(tomorrow);
  };

  const moveLeft = () => {
    let yesterday = new Date(props.year, props.month - 1, props.day - 1);
    setDate(yesterday);
  };

  //const toAsk = (promptObj) => {
  // TODO: take user to Ask.js
  //};

  //
  useEffect(() => {
    document.title = "Daily";
    get("/api/responses", {
      day: props.day,
      month: props.month - 1,
      year: props.year,
      user_id: props.userId,
    }).then((responsesObj) => {
      setEntries(responsesObj);
    });
    //print(entries);
  }, [d, props.userId]);

  //
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

  // useEffect(() => {
  //   console.log(entriesList);
  // }, [entriesList]);

  if (!props.userId) {
    return (
      <>
        <div className="Day-heading1">log in before using journal</div>
      </>
    );
  } /*else if (entries.length !== 0) {
    setEntriesList(
      entries.map((responseObj) => (
        <SingleEntryc
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
    // return (
    //   <>
    //     <section className="Day-paragraph">
    //       {String(String(d.getMonth() + 1) + "/" + d.getDate()) + "/" + String(d.getFullYear())}
    //     </section>
    //     <div className="Day-paragraph">
    //       <button className="Day-button" onClick={() => moveLeft()}>
    //         Previous Day
    //       </button>
    //       <button className="Day-button" onClick={() => moveRight()}>
    //         Next Day
    //       </button>
    //     </div>
    //     <div>
    //       <DayGrid
    //         day={d.getDate()}
    //         month={d.getMonth()}
    //         year={d.getFullYear()}
    //         userId={props.userId}
    //       />
    //     </div>
    //   </>
    // );
    if (entriesList === "" && current < new Date(props.year, props.month - 1, props.day)) {
      return (
        <div className="Day-heading1">
          {/* {console.log(current)}
          {console.log(new Date(props.year, props.month - 1, props.day))} */}
          Not this date yet!
          <section className="Day-paragraph">
            {String(String(props.month) + "/" + props.day + "/" + String(props.year))}
          </section>
          <div className="Day-paragraph">
            <button className="Day-button" onClick={() => moveLeft()}>
<<<<<<< HEAD
              <Link
                to={`/day/${props.userId}/${parseInt(props.day) - 1}/${props.month}/${props.year}`}
              >
                previous day
              </Link>
            </button>
            <button className="Day-button" onClick={() => moveRight()}>
              <Link
                to={`/day/${props.userId}/${parseInt(props.day) + 1}/${props.month}/${props.year}`}
              >
                next day
              </Link>
            </button>
          </div>
        </div>
      );
    } else if (entriesList === "") {
      return (
        <>
          {/* {console.log(current)}
          {console.log(new Date(props.year, props.month - 1, props.day))}{" "} */}
          <section className="Day-paragraph">
            {String(String(props.month) + "/" + props.day + "/" + String(props.year))}
          </section>
          <div className="Day-paragraph">
            <button className="Day-button" onClick={() => moveLeft()}>
              <Link
                to={`/day/${props.userId}/${parseInt(props.day) - 1}/${props.month}/${props.year}`}
              >
                previous day
              </Link>
            </button>
            <button className="Day-button" onClick={() => moveRight()}>
              <Link
                to={`/day/${props.userId}/${parseInt(props.day) + 1}/${props.month}/${props.year}`}
              >
                next day
              </Link>
=======
              previous day
            </button>
            <button className="Day-button" onClick={() => moveRight()}>
              next day
>>>>>>> 6a266ad931cf5666309f0238c42d6d47d1ae7eb8
            </button>

            <section>{entriesList}</section>
          </div>
          <div>
            {" "}
            <button>
              <a className="Day-paragraph" href="/ask">
                start journaling!
              </a>
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          {/* {console.log(current)}
          {console.log(new Date(props.year, props.month - 1, props.day))} */}

          <section className="Day-paragraph">
            {String(String(props.month) + "/" + props.day + "/" + String(props.year))}
          </section>
          <div className="Day-paragraph">
            <button className="Day-button" onClick={() => moveLeft()}>
<<<<<<< HEAD
              <Link
                to={`/day/${props.userId}/${parseInt(props.day) - 1}/${props.month}/${props.year}`}
              >
                previous day
              </Link>
            </button>
            <button className="Day-button" onClick={() => moveRight()}>
              <Link
                to={`/day/${props.userId}/${parseInt(props.day) + 1}/${props.month}/${props.year}`}
              >
                next day
              </Link>
=======
              previous day
            </button>
            <button className="Day-button" onClick={() => moveRight()}>
              next day
>>>>>>> 6a266ad931cf5666309f0238c42d6d47d1ae7eb8
            </button>

            <section>{entriesList}</section>
          </div>
        </>
      );
    }
  }
};

export default Day;
