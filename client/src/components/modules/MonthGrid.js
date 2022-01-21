import { Link } from "@reach/router";
import React, { Component, useEffect, useState } from "react";
import "./MonthGrid.css";

//parent: Month.js
//props: date as a state that depends on the month.js

//TO DO:
//buttons

const MonthGrid = (props) => {
  const [d, setUserDate] = useState(new Date(props.year, props.month, props.date));

  const isLeapYear = () => {
    // TODO: check if props.year is leap year or not
    if (props.year % 4 === 0) {
      return true;
    }
    return false;
  };

  const getMonthDetails = () => {
    switch (props.month) {
      case 0:
        return {
          name: "january",
          days: 31,
        };
      case 1:
        return {
          name: "february",
          days: isLeapYear() ? 29 : 28,
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
    }
  };

  const dayofWeek = () => {
    const firstDay = new Date(props.year, props.month, 1);
    const emptyDays = [];
    let weekday = firstDay.getDay();
    console.log(weekday);
    for (let i = 0; i < weekday; i++) {
      emptyDays.push(<li></li>);
    }
    return emptyDays;
  };

  // want to know if a year is a leap year
  // the first day of every month

  const getDays = () => {
    const details = getMonthDetails();
    const days = [];
    for (let i = 0; i < details.days; i++) {
      let da = new Date(props.year, props.month, i + 1);
      console.log(da);
      days.push(
        <li key={i}>
          <Link
            to={
              `/day/${props.userId}/${da.getDate()}/${da.getMonth() + 1}/${da.getFullYear()}` /*{
              pathname: `/day/${d}` /*,
              state: {
                date: adate.getDate(),
                month: adate.getMonth(),
                year: adate.getFullYear(),
              } day={d.getDay()} month={d.getMonth()} year={d.getFullYear()},
            }*/
            }
          >
            {i + 1}
          </Link>
        </li>
      );
    }
    console.log(days);
    return days;
  };

  return (
    <>
      {/* <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li className="title">
            {getMonthDetails().name}
            <br></br>
            <span>{props.year}</span>
          </li>
        </ul>
      </div> */}

      <ul className="weekdays">
        <li>Su</li>

        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
      </ul>

      <ul className="days">
        {dayofWeek()}
        {/* /* <Link to={`/profile/${props.creator_id}`} className="u-link u-bold">
{props.creator_name}
</Link> */}
        {getDays()}
      </ul>
    </>
  );
};

export default MonthGrid;
