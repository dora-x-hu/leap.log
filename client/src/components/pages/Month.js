import React, { Component, useEffect, useState } from "react";
import MonthGrid from "../modules/MonthGrid";
//proptypes:
//idk yet

//props userID

//props is current date
//state: what it is set to
//use effect reload

const Month = (props) => {
  const [user_date, setDate] = useState(new Date());

  const moveRight = () => {
    setDate(user_date.getDate() + 30);
  };

  const moveLeft = () => {
    setDate(user_date.getDate() - 30);
  };

  useEffect(() => {
    <MonthGrid
      day={user_date.getDay()}
      month={user_date.getMonth()}
      year={user_date.getFullYear()}
      userId={props.userId}
    />;
  }, [user_date]);

  //})
  //states

  //useEFfects

  return (
    <>
      <div>
        <button onClick={moveRight}>Next Month</button>
        <button onClick={moveLeft}>Last Month</button>
      </div>
      <div>
        {" "}
        <MonthGrid
          day={user_date.getDay()}
          month={user_date.getMonth()}
          year={user_date.getFullYear()}
          userId={props.userId}
        />
      </div>
    </>
  );
};

export default Month;
