import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";
import "./Day.css";
import { get } from "../../utilities";
import { Link } from "@reach/router";
import Image from "../modules/sad frog.png";

const Day = (props) => {
  //console.log(props.year);
  //console.log(props.month);
  //console.log(props.day);

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
    // console.log("hi");
    get("/api/prompts", {
      user_id: props.userId,
    }).then((promptObj) => {
      // console.log("promptObj", promptObj);

      setPromptsList(promptObj);
      // console.log("Right after get prompts", promptsList);
    });
  }, [props.userId]);

  // console.log("Right after get prompts", promptsList);
  // console.log(props.userId);

  // useEffect(() => {
  //   console.log("promptslist", promptsList);
  //   const hasNoPrompts = promptsList.length === 0;
  //   console.log("intiial length", hasNoPrompts);
  //   if (hasNoPrompts) {
  //     setPromptsList([]);
  //   }
  // }, [props.userId]);

  //console.log(promptsList[0].content + "is the first prompt");

  //let entriesList = ["here", "there", "everywhere"];

  // add useEffect() statement for this
  useEffect(() => {
    // console.log(entries.length);
    const hasEntries = entries.length !== 0;

    if (hasEntries) {
      // (result) => {
      //   if (!categories.map((c) => c.name).includes(result.name)) {
      //     setCategories(categories.concat(result));
      //   }

      // const getCat = (content) => {
      //   console.log(" in getCat");
      //   console.log("is 0??", promptsList.length);
      //   for (let i = 0; i < promptsList.length; i++) {
      //     console.log(promptsList[i]);
      //   }
      //   const prompt = promptsList.find((question) => question.content === content);
      //   return prompt.category_id;
      // };

      setEntriesList(
        entries.map((responseObj) => (
          <SingleEntry
            question={responseObj.question}
            content={responseObj.content}
            user_id={props.userId}
            day={responseObj.day}
            month={responseObj.month + 1}
            year={responseObj.year}
            userId={props.userId}
            index={entries.indexOf(responseObj)}
            // category_id={getCat(responseObj.content)}
            //questionIndex={promptsList.getI}
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

  /////////////////////////////
  // useEffect(() => {
  //   // console.log(prompts);
  //   setPromptsList([]);
  //   if (categories.length > 0) {
  //     // console.log("hello categories", categories);
  //     for (let cat = 0; cat < categories.length; cat++) {
  //       if (categories[cat].isSelected) {
  //         let specific_prompts = [];

  //         const category_id = categories[cat].name;
  //         // console.log(category_id);
  //         // console.log(categories[cat].user_id);
  //         for (let p = 0; p < prompts.length; p++) {
  //           if (prompts[p].category_id === category_id) {
  //             specific_prompts = specific_prompts.concat(prompts[p]);
  //             // console.log(category_id, prompts[p].content);
  //           }
  //         }
  //         // console.log(specific_prompts);
  //         setPromptsList((promptsList) =>
  //           promptsList.concat(
  //             <div>
  //               <SinglePrompt category_id={category_id} prompts={specific_prompts} />{" "}
  //               <input type="text" placeholder="new prompt..." id={category_id}></input>
  //               <button
  //                 // id={category_id}
  //                 className="Prompt-button"
  //                 onClick={() => {
  //                   console.log(document.getElementById(category_id).value);
  //                   if (document.getElementById(category_id).value.replace(/\s+/g, "") !== "") {
  //                     submitPrompt(document.getElementById(category_id).value, category_id);
  //                   }
  //                   {
  //                     // console.log(category_id);
  //                   }
  //                 }}
  //               >
  //                 submit
  //               </button>
  //             </div>
  //           )
  //         );
  //       }
  //     }
  //   }
  // }, [prompts, categories]);
  /////////////////////////////

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
    const yesterday = new Date(selectedDay);
    yesterday.setDate(selectedDay.getDate() - 1);
    // console.log(selectedDay);
    // console.log(tomorrow);
    // console.log(yesterday);

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
                prev day
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
              src={Image}
              // width="300px"
              // height="300px"
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
                prev day
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
              <Link to={`/ask/${props.userId}/${props.day}/${props.month}/${props.year}/0`}>
                {/* <a href={`/ask/${props.userId}/${props.day}/${props.month}/${props.year}`} /> */}
                start journaling!
              </Link>
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
                prev day
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
