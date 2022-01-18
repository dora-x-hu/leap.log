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
    let mo;
    if (day === 0) {
      mo = new Date(props.year, props.month, props.day);
      // console.log("here?");
    } else if (day === 1) {
      mo = new Date(props.year, props.month, props.day - 1);
    } else if (day === 2) {
      mo = new Date(props.year, props.month, props.day - 2);
      console.log("here?");
    } else if (day === 3) {
      mo = new Date(props.year, props.month, props.day - 3);
    } else if (day === 4) {
      mo = new Date(props.year, props.month, props.day - 4);
    } else if (day === 5) {
      mo = new Date(props.year, props.month, props.day - 5);
    } else if (day === 6) {
      mo = new Date(props.year, props.month, props.day - 6);
    }
    return { date: mo, week: ["mo", "tu", "we", "th", "fr", "sa", "su"] };
  };

  //creates the week div
  const createWeek = () => {
    const grid = [];
    const ans = getWeekDetails(props.week);
    // const week = getWeekDetails(props.week).week;

    for (let i = 0; i < 7; i++) {
      grid.push(
        <div>
          {ans.week[i]}
          {" " +
            String(ans.date.getMonth() + 1) +
            "/" +
            String(ans.date.getDate() + i) +
            "/" +
            String(ans.date.getFullYear())}
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
