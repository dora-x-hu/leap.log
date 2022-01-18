import React from "react";
import { Link } from "@reach/router";
// import GoogleLogin, { GoogleLogout } from "react-google-login";

const HomeButton = () => {
  return (
    <button>
      <Link to="/">Home</Link>
    </button>
  );
};

export default HomeButton;
