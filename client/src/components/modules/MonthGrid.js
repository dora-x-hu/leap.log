import React, { Component, useEffect } from "react";

//parent: Month.js
//props: date as a state that depends on the month.js

const MonthGrid = (props) => {
  const d = new Date();
  return (
    <>
      <section>
        <h2>Idk how to set date </h2>
        <p>Content</p>
      </section>

      <section>
        <h2>Day {(props.day, props.month)}</h2>
        <p>Content</p>
      </section>

      <section>
        <h2>Day 3</h2>
        <p>Content</p>
      </section>

      <section>
        <h2>Day 4</h2>
        <p>Content</p>
      </section>

      <section>
        <h2>Day 5</h2>
        <p>Content</p>
      </section>

      <section>
        <h2>Day 6</h2>
        <p>Content</p>
      </section>

      <section>
        <h2>Day 7</h2>
        <p>Content</p>
      </section>
    </>
  );
};
export default MonthGrid;
