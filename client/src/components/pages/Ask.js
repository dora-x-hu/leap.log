import React, { Component } from "react";
import { Router } from "@reach/router";

const Ask = (props) => {
  return (
    <>
      <form>
        <section>
          <label>journal prompt</label>
        </section>

        <input type="text"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default Ask;
