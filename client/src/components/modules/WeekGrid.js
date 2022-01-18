import { Link } from "@reach/router";
import React, { Component, useEffect, useState } from "react";
import "./WeekGrid.css";

const WeekGrid = (props) => {
  return (
    <>
      {/* <section>Week of [start - end]</section> */}
      <div className="wrapper">
        <div>Mo {props.day}</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
    </>
  );
};

export default WeekGrid;
