import { Link } from "@reach/router";
import React, { Component, useEffect, useState } from "react";
import "./WeekGrid.css";

//parent: Week.js
//props: date as a state that depends on the month.js

//TO DO:
//buttons

const WeekGrid = (props) => {
  const [d, setUserDate] = useState(new Date(props.year, props.month, props.day));

  const getWeekDetails = () => {
    switch (d.getDay()) {
      case 0:
        return {
          name: "mo",

          date: new Date(d.getDate()),
        };
      case 1:
        return {
          name: "tu",
          date: new Date(d.getDate()),
        };
      case 2:
        return {
          name: "we",
          date: new Date(d.getDate()),
        };
      case 3:
        return {
          name: "th",
          date: new Date(d.getDate()),
        };
      case 4:
        return {
          name: "fr",
          date: new Date(d.getDate()),
        };
      case 5:
        return {
          name: "sa",
          date: new Date(d.getDate()),
        };
      case 6:
        return {
          name: "su",
          date: new Date(d.getDate()),
        };
    }
  };

  const getWeek = () => {
    // const [d, setUserDate] = useState(new Date(props.year, props.month, props.day));
    const week = [];
    const details = getWeekDetails();
    for (weekday in details.name) {
      week.push(
        <div key={weekday}>
          {weekday}
          {String(d.getDate()) + "/" + String(d.getMonth()) + "/" + String(d.getFullYear())}
        </div>
      );
      // {
      //   /* {String(d.getDate()) + "/" + String(d.getMonth()) + "/" + String(d.getFullYear())} */
      // }
    }
    return week;
  };

  return (
    <>
      {/* <section>Week of [start - end]</section> */}
      <div className="wrapper">
        {/* <div>Mo {props.day}</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div> */}
        {getWeek()}
      </div>
      {console.log(d)}
    </>
  );
};

export default WeekGrid;
