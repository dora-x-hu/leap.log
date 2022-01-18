import React from "react";
import { Link } from "@reach/router";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
import "../modules/HomeButton.css";

const HomeButton = () => {
  return (
    <button className="Home-button">
      <Link to="/">Home</Link>
    </button>
  );
};

export default HomeButton;
