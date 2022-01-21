import React from "react";
import { Link } from "@reach/router";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../modules/HomeButton.css";

const HomeButton = () => {
  return (
    <div>
      <button className="Home-button">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default HomeButton;
