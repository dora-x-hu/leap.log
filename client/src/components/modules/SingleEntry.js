import React, { Component, useEffect, useState } from "react";

import { get } from "../../utilities";

const SingleEntry = (props) => {
  // const [content, setContent] = useState();

  return (
    <>
      <div>{props.content}</div>
      <div>{props.question}</div>
    </>
  );
};
export default SingleEntry;
