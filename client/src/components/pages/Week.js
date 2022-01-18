import React, { Component, useEffect } from "react";

//proptypes: userid

const Week = (props) => {
  useEffect(() => {
    document.title = "Weekly";
  });
  return (
    <>
      <section>Week of [start - end]</section>
    </>
  );
};

export default Week;
