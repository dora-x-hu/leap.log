import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "../modules/Login.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";

const Login = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <button className="Login-button" onClick={renderProps.onClick}>
              {" "}
              <img className="imgContainer"
                src="https://www.designbust.com/download/1016/png/google_logo_png_transparent512.png"
                width="30px"
                height="30px"
              ></img>{" "}
              logout{" "}
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <button className="Login-button" onClick={renderProps.onClick}>
              {" "}
              <img className="imgContainer"
                src="https://www.designbust.com/download/1016/png/google_logo_png_transparent512.png"
                width="30px"
                height="30px"
              ></img>{" "}
              login with google{" "}
            </button>
          )}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}
    </>
  );
};

export default Login;
