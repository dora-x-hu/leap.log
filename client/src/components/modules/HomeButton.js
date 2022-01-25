import React from "react";
import { Link } from "@reach/router";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../modules/HomeButton.css";
import Login from "../modules/Login.js";

const HomeButton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <div className="Container">
      <button className="Home-button">
        <Link to="/">Home</Link>
      </button>

      <div className="login-button">
          <Login userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
        </div>
    </div>
  );
};

export default HomeButton;
