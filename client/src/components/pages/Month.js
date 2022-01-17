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
  const [user_date, setUserDate] = useState(new Date());

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
        <button onClick={nextMonth}>Next Month</button>
        <button onClick={prevMonth}>Last Month</button>
      </div>
      <div>
        {" "}
        <MonthGrid
          day={user_date.getDate()}
          month={user_date.getMonth()}
          year={user_date.getFullYear()}
          userId={props.userId}
        />
      </div>
    </>
  );
};

export default Month;
