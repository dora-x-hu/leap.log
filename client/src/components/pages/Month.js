import React, { Component, useEffect, useState } from "react";
import MonthGrid from "../modules/MonthGrid";
// import Date from "core-js/core/date";
//proptypes:
//idk yet

//props userID

//props is current date
//state: what it is set to
//use effect reload

const Month = (props) => {
  const [d, setUserDate] = useState(new Date());

  const moveRight = () => {
    let tomorrow = new Date(d.getFullYear(), (d.getMonth() + 1) % 12, d.getDate());
    setUserDate(tomorrow);
  };

  const moveLeft = () => {
    let tomorrow = new Date(d.getFullYear(), (d.getMonth() + 11) % 12, d.getDate());
    setUserDate(tomorrow);
  };

  const nextMonth = () => {
    //setDate(new Date(user_date.getFullYear, (user_date.getMonth + 1) % 12, user_date.getDate));
    const incrementMonth = () => {
      const newMonth = new Date();
      newMonth.setDate(newMonth.getDate() + 1);
      return newMonth;
    };
    incrementMonth().then((ans) => {
      setUserDate(ans);
    });
  };

  const prevMonth = () => {
    // setDate(
    //   new Date(
    //     user_date.getFullYear,
    //     (((user_date.getMonth - 1) % 12) + 12) % 12,
    //     user_date.getDate
    //   )
    // );
    const incrementMonth = () => {
      const newMonth = new Date();
      newMonth.setDate(newMonth.getDate() + 1);
      return newMonth;
    };
    incrementMonth().then((ans) => {
      setUserDate(ans);
    });
    //setDate(user_date.getDate - 30);
  };

  useEffect(() => {
    document.title = "Monthly";
  });

  const isLeapYear = () => {
    // TODO: check if props.year is leap year or not
    if (d.getFullYear() % 4 === 0) {
      return true;
    }
    return false;
  };

  const getMonthDetails = () => {
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
          name: "septembe",
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

  return (
    <>
      <div className="month">
        <ul>
          <li className="prev" onClick={moveLeft}>
            &#10094;
          </li>
          <li className="next" onClick={moveRight}>
            &#10095;
          </li>
          <li className="title">
            {getMonthDetails().name}
            <br></br>
            <span>{d.getFullYear()}</span>
          </li>
        </ul>
      </div>
      {/* <div>
        <button onClick={moveLeft}>Last Month{console.log(d)}</button>

        <button onClick={moveRight}>
          Next Month
          {/* {String(d.getDate()) + "/" + String(d.getMonth()) + "/" + String(d.getFullYear())} */}
      {/* </button>
      </div> */}{" "}
      <div>
        {" "}
        <MonthGrid
          day={d.getDate()}
          month={d.getMonth()}
          year={d.getFullYear()}
          userId={props.userId}
        />
      </div>
    </>
  );
};

export default Month;
