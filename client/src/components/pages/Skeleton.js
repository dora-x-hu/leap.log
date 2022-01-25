import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";
import Week from "./Week.js";
//import NavBar from "../modules/navbar.js";
import Image from "../modules/lilypad.png";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";

const Skeleton = (props) => {
  return (
    <>
      <div className="Skeleton">
        <h1 className="Skeleton-heading1">leap.log: your customizable journal </h1>
        {!props.userId && <h2 className="Skeleton-paragraph"> login to get started</h2>}
        <ul>
          <img src={Image}></img>
          <li>❀ choose which prompts to journal about</li>
          <li>❀ reflect on past journals</li>
          <li>❀ customize your prompts</li>
        </ul>
      </div>
    </>
  );
};

export default Skeleton;
