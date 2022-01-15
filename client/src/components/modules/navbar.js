import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./navbar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav flex">
          <Link to="/day/" className="nav-item nav-link item nav-left">
            daily
          </Link>
          <Link to="/week/" className="nav-item nav-link item">
            weekly
          </Link>
          <Link to="/month/" className="nav-item nav-link item nav-right">
            monthly
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
