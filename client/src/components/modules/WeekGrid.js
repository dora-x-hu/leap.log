import { Link } from "@reach/router";
import React, { Component, useEffect, useState } from "react";
import "./WeekGrid.css";

//parent: Week.js
//props: date as a state that depends on the month.js

//TO DO:
//buttons

const WeekGrid = (props) => {
  // const [d, setUserDate] = useState(new Date(props.year, props.month, props.day));

  //this function sets the  date of monday, where getDay = 0

  const getWeekDetails = (day) => {
    let su;
    if (day === 0) {
      su = new Date(props.year, props.month, props.day);
      // console.log("here?");
    } else if (day === 1) {
      su = new Date(props.year, props.month, props.day - 1);
    } else if (day === 2) {
      su = new Date(props.year, props.month, props.day - 2);
      console.log("here?");
    } else if (day === 3) {
      su = new Date(props.year, props.month, props.day - 3);
    } else if (day === 4) {
      su = new Date(props.year, props.month, props.day - 4);
    } else if (day === 5) {
      su = new Date(props.year, props.month, props.day - 5);
    } else if (day === 6) {
      su = new Date(props.year, props.month, props.day - 6);
    }
    return { date: su, week: ["su", "mo", "tu", "we", "th", "fr", "sa"] };
  };

  const isLeapYear = (date) => {
    // TODO: check if props.year is leap year or not
    if (date.getFullYear() % 4 === 0) {
      return true;
    }
    return false;
  };

  const getMonthDetails = (date) => {
    //console.log(date);
    switch (date.getMonth()) {
      case 0:
        return {
          name: "january",
          days: 31,
        };
      case 1:
        return {
          name: "february",
          days: isLeapYear(date) ? 29 : 28,
        };
      case 2:
        return {
          name: "march",
          days: 31,
        };
      case 3:
        return {
          name: "april",
          days: 30,
        };
      case 4:
        return {
          name: "may",
          days: 31,
        };
      case 5:
        return {
          name: "june",
          days: 30,
        };
      case 6:
        return {
          name: "july",
          days: 31,
        };
      case 7:
        return {
          name: "august",
          days: 31,
        };
      case 8:
        return {
          name: "september",
          days: 30,
        };
      case 9:
        return {
          name: "october",
          days: 31,
        };
      case 10:
        return {
          name: "november",
          days: 30,
        };
      case 11:
        return {
          name: "december",
          days: 31,
        };
      default:
        return {
          name: "default",
          days: 0,
        };
    }
  };

  //creates the week div
  const createWeek = () => {
    const grid = [];
    const ans = getWeekDetails(props.week);
    // const week = getWeekDetails(props.week).week;

    for (let i = 0; i < 7; i++) {
      let d = new Date(ans.date.getFullYear(), ans.date.getMonth(), ans.date.getDate() + i);
      let maxDays = getMonthDetails(d).days;
      console.log("max days: " + String(maxDays));
      console.log(String(ans.date.getDate() + i) + "/");
      console.log(d.getDate());
      if (ans.date.getDate() + i > maxDays) {
        let d = new Date(ans.date.getFullYear(), ans.date.getMonth() + 1 + 1, 1);
        console.log(d.getDate() + "teehee");
      }

      grid.push(
        <div>
          {" "}
          <Link
            to={`/day/${props.userId}/${ans.date.getDate() + i}/${
              ans.date.getMonth() + 1
            }/${ans.date.getFullYear()}`}
          >
            {ans.week[i]}
            {" " +
              String(d.getMonth() + 1) +
              "/" +
              String(d.getDate()) +
              "/" +
              String(ans.date.getFullYear())}
          </Link>
        </div>
      );
    }
    return grid;
  };
  return (
    <>
      {/* {console.log(d)} */}

      <div className="wrapper">
        {/* {console.log(d)} */}

        {/* <div>Mo {props.day}</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div> */}
        {createWeek()}
      </div>
    </>
  );
};

export default WeekGrid;
