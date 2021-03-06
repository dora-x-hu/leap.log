import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";
import Week from "./Week.js";
//import NavBar from "../modules/navbar.js";
import Lilypad from "../modules/lilypad.png";
import Greeting from "../modules/greeting frog.png";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";

const Skeleton = (props) => {
  return (
    <>
      <div className="Skeleton">
        <h1 className="Skeleton-heading1">leap.log: your customizable journal </h1>
        {!props.userId && <h2 className="Skeleton-paragraph"> login to get started</h2>}
        {props.userId && <h2 className="Skeleton-paragraph">to journal, click on daily</h2>}
        <img src={Greeting} className="greeting-img"></img>
        <ul>
          <li>
            <img src={Lilypad} height="30px" width="30px"></img> choose which prompts to journal about
          </li>
          <li>
            <img src={Lilypad} height="30px" width="30px"></img> reflect on past journals
          </li>
          <li>
            <img src={Lilypad} height="30px" width="30px"></img> customize your prompts
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skeleton;
