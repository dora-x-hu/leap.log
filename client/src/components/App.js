import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import Day from "./pages/Day.js";
import Week from "./pages/Week.js";
import Month from "./pages/Month.js";
import Ask from "./pages/Ask.js";
import Profile from "./pages/Profile.js";
import Upday from "./pages/upDay.js";

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
  // const currentDate = new Date();
  // const day = currentDate.getDate();
  // const month = currentDate.getMonth() + 1;
  // const year = currentDate.getFullYear();

  // TODO: have states for app to make unique Day URLs work
  let thisDate = new Date();

  const [currentDate, setDate] = useState(thisDate.getDate());
  const [currentMonth, setMonth] = useState(thisDate.getMonth());
  const [currentYear, setYear] = useState(thisDate.getFullYear());

  const changeDate = (date, month, year) => {
    setDate(date);
    setMonth(month);
    setYear(year);
  };

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
        <Day
<<<<<<< HEAD
          path="/day/:userId/:day/:month/:year"
          userId={userId}
          // day={day}
          // month={month}
          // year={year}
=======
          path="/day/:userId/:currentDate/:currentMonth/:currentYear"
          userId={userId}
          changeDate={changeDate}
          date={currentDate}
          month={currentMonth}
          year={currentYear}
>>>>>>> 6a266ad931cf5666309f0238c42d6d47d1ae7eb8
        />
        <Week path="/week" userId={userId} />
        <Month
          path="/month"
          userId={userId}
          date={currentDate}
          month={currentMonth}
          year={currentYear}
        />
        <Ask path="/ask" userId={userId} />
        <Profile path="/profile/:userId" userId={userId} />
        <Upday path="/test" userId={userId} />

        <NotFound default />
        {/* {props.userId && (
            <Link to={`/day/${props.userId}`} className="nav-item nav-link item">
              profile
            </Link>
          )} I need both userId and day date in that to make a unique link
            If not logged in, should just be day */}
      </Router>
    </>
  );
};

export default App;
