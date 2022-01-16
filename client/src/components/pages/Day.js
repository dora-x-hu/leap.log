import React, { Component, useEffect, useState } from "react";
//import journalEntry from "../../../../server/models/journalEntry";
import SingleEntry from "../modules/SingleEntry.js";

import { get } from "../../utilities";

//parames: userid

const Day = (props) => {
  const [entries, setEntries] = useState([]);
  //const [date, setDate] = useState();

  useEffect(() => {
    get("/api/responses", { day: Date.now() }).then((responsesObj) => {
      setEntries(responsesObj);
    });
  }, []);

  let entriesList = [];
  const hasEntries = entries.length !== 0;

<<<<<<< HEAD
=======
  if (hasEntries) {
    entriesList = entries.map((responseObj) => (
      <SingleEntry
        question={responseObj.question}
        content={responseObj.content}
        user_id={props.userId}
        day={responseObj.day}
      />
    ));
  } else {
    entriesList = "Start Journalling!";
  }

>>>>>>> 7d4559b51d243dc46c4ea6798ea93cbea305b6d6
  return (
    <div>
      {Date.now()}
      <div>
        {hasEntries
          ? props.journalEntry.map((response) => {
              <SingleEntry
                question={response.question}
                content={response.content}
                user_id={props.userId}
                day={response.day}
              />;
            })
          : entriesList.concat("Start Journaling")}
      </div>
    </div>
  );
};

export default Day;
