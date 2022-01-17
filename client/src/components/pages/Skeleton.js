import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";
import Week from "./Week.js";
//import NavBar from "../modules/navbar.js";
import Login from "../modules/Login.js";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      <Login userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
      <h1 className="Skeleton-heading1">
        welcome to leap.log, an easy to use and aesthetic journal{" "}
      </h1>
      <h2> login to get started, or explore our pages</h2>
      <ul>
        <li>choose which questions to reflect on</li>
        <li>review old journal entires</li>
        <li>customize questions</li>
      </ul>
    </>
  );
};

export default Skeleton;
