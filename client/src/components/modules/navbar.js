import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./navbar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  let d = new Date();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav flex">
          <Link
            to={`/day/${props.userId}/${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`}
            className="nav-item nav-link item nav-left"
          >
            daily
          </Link>
          <Link to="/week/" className="nav-item nav-link item">
            weekly
          </Link>
          {/* {props.userId && (
            <Link to={`/profile/${props.userId}`} className="nav-item nav-link item">
              profile
            </Link>
          )} */}
          <Link to="/month/" className={props.userId ? "monthLoggedIn" : "monthLoggedOut"}>
            monthly
          </Link>
          {props.userId && (
            <Link
              to={`/profile/${props.userId}`}
              className={props.userId ? "profileLoggedIn" : "profileLoggedOut"}
            >
              profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
