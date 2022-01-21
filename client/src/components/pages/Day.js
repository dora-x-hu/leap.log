import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";
import "./Day.css";
import { get } from "../../utilities";
import { Link } from "@reach/router";

const Day = (props) => {
  console.log(props.year);
  console.log(props.month);
  console.log(props.day);

  const [entries, setEntries] = useState([]);
  // const [d, setDate] = useState(new Date(props.year, props.month - 1, props.day));
  const [entriesList, setEntriesList] = useState(null);
  const [promptsList, setPromptsList] = useState([]);
  const newcurrent = new Date();
  const current = new Date(newcurrent.getFullYear(), newcurrent.getMonth(), newcurrent.getDate());

  // const moveRight = () => {
  //   let tomorrow = new Date(props.year, props.month - 1, props.day + 1);
  //   setDate(tomorrow);
  // };

  // const moveLeft = () => {
  //   let tomorrow = new Date(props.year, props.month - 1, props.day - 1);
  //   setDate(tomorrow);
  // };

  //const toAsk = (promptObj) => {
  // TODO: take user to Ask.js
  //};

  //
  // get("/api/responses", {
  //   day: props.day,
  //   month: props.month - 1,
  //   year: props.year,
  //   user_id: props.userId,
  // }).then((responsesObj) => {
  //   setEntries(responsesObj);
  // });

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
  }, [props.userId, props.day]);

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

  if (props.userId === "undefined") {
    return (
      <>
        <div className="Day-heading1">log in before using journal</div>
      </>
    );
  } else {
    const selectedDay = new Date(props.year, props.month - 1, props.day);
    const tomorrow = new Date(selectedDay);
    tomorrow.setDate(selectedDay.getDate() + 1);
    const yesterday = new Date();
    yesterday.setDate(selectedDay.getDate() - 1);

    if (current < new Date(props.year, props.month - 1, props.day)) {
      return (
        <div>
          <section className="Day-paragraph">
            {String(String(props.month) + "/" + props.day + "/" + String(props.year))}
          </section>
          <div className="Day-paragraph">
            <button className="Day-button">
              <Link
                to={`/day/${props.userId}/${yesterday.getDate()}/${
                  yesterday.getMonth() + 1
                }/${yesterday.getFullYear()}`}
              >
                previous day
              </Link>
            </button>
            <button className="Day-button">
              <Link
                to={`/day/${props.userId}/${tomorrow.getDate()}/${
                  tomorrow.getMonth() + 1
                }/${tomorrow.getFullYear()}`}
              >
                next day
              </Link>
            </button>
          </div>
          <div className="Day-heading1">
            {" "}
            <div>not this date yet!</div>
            <img
              src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1039811028FS2105/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/kawaii-happy-green-frog-smiling-sticker.jpg"
              width="300px"
              height="300px"
            ></img>
          </div>
        </div>
      );
    } else if (entriesList === "") {
      return (
        <>
          <section className="Day-paragraph">
            {String(String(props.month) + "/" + props.day + "/" + String(props.year))}
          </section>
          <div className="Day-paragraph">
            <button className="Day-button">
              <Link
                to={`/day/${props.userId}/${yesterday.getDate()}/${
                  yesterday.getMonth() + 1
                }/${yesterday.getFullYear()}`}
              >
                previous day
              </Link>
            </button>
            <button className="Day-button">
              <Link
                to={`/day/${props.userId}/${tomorrow.getDate()}/${
                  tomorrow.getMonth() + 1
                }/${tomorrow.getFullYear()}`}
              >
                next day
              </Link>
            </button>

            <section>{entriesList}</section>
          </div>
          <div className="Day-paragraph">
            {" "}
            <button>
              <a href="/ask">start journaling!</a>
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <section className="Day-paragraph">
            {String(String(props.month) + "/" + props.day + "/" + String(props.year))}
          </section>
          <div className="Day-paragraph">
            <button className="Day-button">
              <Link
                to={`/day/${props.userId}/${yesterday.getDate()}/${
                  yesterday.getMonth() + 1
                }/${yesterday.getFullYear()}`}
              >
                previous day
              </Link>
            </button>
            <button className="Day-button">
              <Link
                to={`/day/${props.userId}/${tomorrow.getDate()}/${
                  tomorrow.getMonth() + 1
                }/${tomorrow.getFullYear()}`}
              >
                next day
              </Link>
            </button>

            <section>{entriesList}</section>
          </div>
        </>
      );
    }
  }
};

export default Day;
