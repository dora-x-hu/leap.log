import { Link } from "@reach/router";
import React, { Component, useEffect, useState } from "react";

import { get } from "../../utilities";
import "./SingleEntry.css";

const SingleEntry = (props) => {
  // const [content, setContent] = useState();

  return (
    <>
      <div className="SingleEntry-question">
        <Link to={`/ask/${props.userId}/${props.day}/${props.month}/${props.year}/${props.index}`}>
          {props.question}
        </Link>
      </div>

      <div className="SingleEntry-response">{props.content}</div>
    </>
  );
};
export default SingleEntry;
