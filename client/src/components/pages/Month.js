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
    //return d.getDate() + 1;
    setUserDate(tomorrow);
    //d.setDate(d.getDate() + 1);
    //console.log(d);
  };

  const moveLeft = () => {
    let tomorrow = new Date(d.getFullYear(), (d.getMonth() + 11) % 12, d.getDate());
    //return d.getDate() + 1;
    setUserDate(tomorrow);
    //d.setDate(d.getDate() + 1);
    //console.log(d);
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

  // useEffect(() => {
  //   <MonthGrid
  //     day={user_date.getDay()}
  //     month={user_date.getMonth()}
  //     year={user_date.getFullYear()}
  //     userId={props.userId}
  //   />;
  // }, [user_date]);

  //})
  //states

  //useEFfects

  return (
    <>
      <div>
        <button onClick={moveRight}>
          Next Month:
          {/* {String(d.getDate()) + "/" + String(d.getMonth()) + "/" + String(d.getFullYear())} */}
        </button>
        <button onClick={moveLeft}>Last Month</button>
      </div>
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
