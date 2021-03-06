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
    } else if (day === 1) {
      su = new Date(props.year, props.month, props.day - 1);
    } else if (day === 2) {
      su = new Date(props.year, props.month, props.day - 2);
      // console.log("here?");
    } else if (day === 3) {
      su = new Date(props.year, props.month, props.day - 3);
    } else if (day === 4) {
      su = new Date(props.year, props.month, props.day - 4);
    } else if (day === 5) {
      su = new Date(props.year, props.month, props.day - 5);
    } else if (day === 6) {
      su = new Date(props.year, props.month, props.day - 6);
    }
    return { date: su, week: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] };
  };

  const isLeapYear = (date) => {
    // TODO: check if props.year is leap year or not
    if (date.getFullYear() % 4 === 0) {
      return true;
    }
    return false;
  };

  const getMonthDetails = (date) => {
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
      // console.log(d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate());
      let maxDays = getMonthDetails(d).days;

      grid.push(
        <div>
          {" "}
          <Link
            to={`/day/${props.userId}/${d.getDate()}/${d.getMonth() + 1}/${ans.date.getFullYear()}`}
          >
            {ans.week[i]}
            {"| " +
              String(d.getMonth() + 1) +
              "." +
              String(d.getDate()) +
              "." +
              String(ans.date.getFullYear())}
          </Link>
        </div>
      );
    }
    return grid;
  };
  return (
    <>
      <div className="wrapper">{createWeek()}</div>
    </>
  );
};

export default WeekGrid;
