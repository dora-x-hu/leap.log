import { Link } from "@reach/router";
import React, { Component, useEffect, useState } from "react";

import { get } from "../../utilities";
import "./SingleEntry.css";

const SingleEntry = (props) => {
  // const [content, setContent] = useState();

  return (
    <>
      <div className="SingleEntry-question">{props.question}</div>

      <div className="SingleEntry-response">
        <Link to={`/ask/${props.user_id}/${props.day}/${props.month}/${props.year}`}>
          {props.content}
        </Link>
      </div>
    </>
  );
};
export default SingleEntry;
