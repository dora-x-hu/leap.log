import React, { Component, useEffect, useState } from "react";

const SinglePrompt = (props) => {
  // const [content, setContent] = useState();

  return (
    <>
      <div>
        <h1>{props.category_id}</h1>
        <p>{props.content}</p>
      </div>
    </>
  );
};
export default SinglePrompt;
