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
            <li className="title">Week</li>
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
