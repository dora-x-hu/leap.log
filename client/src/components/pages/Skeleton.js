import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";
import Week from "./Week.js";
import NavBar from "../modules/navbar.js";
import Login from "../modules/Login.js";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      <Login userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
      <h1 className="Skeleton-heading1">
        Welcome to Leap.Log, an easy to use and aesthetic journal{" "}
      </h1>
      <h2> Login to get started, or explore our pages</h2>
      <ul>
        <li>
          Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID (obtain this at
          http://weblab.to/clientid)
        </li>
        <li>Change the Server CLIENT_ID to the same CLIENT_ID (auth.js)</li>
        <li>
          Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the
          MongoDB setup.
        </li>
        <li>Change the Database Name for MongoDB to whatever you put in the SRV (server.js)</li>
      </ul>
      <h2>How to go from this skeleton to our actual app</h2>
      <a href="http://weblab.to/get-started">Check out this getting started guide</a>
    </>
  );
};

export default Skeleton;
