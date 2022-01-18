import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import Day from "./pages/Day.js";
import Week from "./pages/Week.js";
import Month from "./pages/Month.js";
import Ask from "./pages/Ask.js";
import Profile from "./pages/Profile.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import NavBar from "./modules/navbar.js";
import HomeButton from "./modules/HomeButton.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  // categories as a state

  // questions as a state
  //const [questions, set]

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        console.log(user._id);
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <HomeButton />
      <NavBar userId={userId} />

      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <Day path="/day" userId={userId} />
        <Week path="/week" userId={userId} />
        <Month path="/month" userId={userId} />
        <Ask path="/ask" userId={userId} />
        <Profile path="/profile/:userId" userId={userId} />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
