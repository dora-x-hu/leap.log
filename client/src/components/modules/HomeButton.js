import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../modules/HomeButton.css";
import Login from "../modules/Login.js";
import Image from "../modules/leaplog logo.png";

const HomeButton = ({ userId, handleLogin, handleLogout, completionStatus }) => {
  return (
    <div className="Container">
      <button className="Home-button">
        <Link to="/">
          <img src={Image} width="50%"></img>
        </Link>
      </button>

      <div className="login-button">
        <Login
          userId={userId}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          completionStatus={completionStatus}
        />
      </div>
    </div>
  );
};

export default HomeButton;
