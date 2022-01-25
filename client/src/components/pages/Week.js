import React, { Component, useEffect, useState } from "react";
import "./Week.css";
import WeekGrid from "../modules/WeekGrid";
import Login from "../modules/Login.js";

//proptypes: userid

const Week = (props) => {
  const [d, setUserDate] = useState(new Date());

  useEffect(() => {
    document.title = "Weekly";
  });

  const moveRight = () => {
    let tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7);
    setUserDate(tomorrow);
  };

  const moveLeft = () => {
    let tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
    setUserDate(tomorrow);
  };

  const getMonthDetails = () => {
    console.log(d);
    switch (d.getMonth()) {
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
      default:
        return {
          name: "default",
          days: 0,
        };
    }
  };

  const isLeapYear = () => {
    // TODO: check if props.year is leap year or not
    if (d.getFullYear() % 4 === 0) {
      return true;
    }
    return false;
  };
  return (
    <>
      <div>
        <div className="month">
          <ul>
            <li className="prev" onClick={moveLeft}>
              &#10094;
            </li>
            <li className="next" onClick={moveRight}>
              &#10095;
            </li>
            {/* <li className="title">Week</li> */}
            <li className="title">
              {getMonthDetails().name}
              <br></br>
              <span>{d.getFullYear()}</span>
            </li>
          </ul>
        </div>
        {/* <div className="flex">
          <button onClick={moveLeft}>Last Week {console.log(d)}</button>

          <button onClick={moveRight}>Next Week{console.log(d)}</button>
        </div> */}
        <div>
          {" "}
          <WeekGrid
            day={d.getDate()}
            month={d.getMonth()}
            year={d.getFullYear()}
            week={d.getDay()}
            userId={props.userId}
          />
        </div>
      </div>
    </>
  );
};

export default Week;
