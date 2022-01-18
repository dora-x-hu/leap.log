import React, { useState, useEffect } from "react";
// import CatHappiness from "../modules/CatHappiness.js";
import { get, post } from "../../utilities";

import "../../utilities.css";
// import "./Profile.css";

const Profile = (props) => {
  useEffect(() => {}, []);

  const submitStuff = (thisCategory) => {
    post("/api/category", {
      name: thisCategory,
      user_id: props.userId,
      isSelected: true,
    });
  };

  return (
    <>
      <div>
        <h2>Categories</h2>
        <input type="text" Placeholder="new category..." id="newCategory"></input>
        <button onClick={() => submitStuff(document.getElementById("newCategory").value)}>
          Submit
        </button>
        <section></section>
      </div>
      <div>Questions</div>
    </>
    // <>

    //   <div
    //     className="Profile-avatarContainer"
    //     onClick={() => {
    //       incrementCatHappiness();
    //     }}
    //   >
    //     <div className="Profile-avatar" />
    //   </div>
    //   <h1 className="Profile-name u-textCenter">{user.name}</h1>
    //   <hr className="Profile-linejj" />
    //   <div className="u-flex">
    //     <div className="Profile-subContainer u-textCenter">
    //       <h4 className="Profile-subTitle">About Me</h4>
    //       <div id="profile-description">
    //         I am really allergic to cats i don't know why i have a catbook
    //       </div>
    //     </div>
    //     <div className="Profile-subContainer u-textCenter">
    //       <h4 className="Profile-subTitle">Cat Happiness</h4>
    //       <CatHappiness catHappiness={catHappiness} />
    //     </div>
    //     <div className="Profile-subContainer u-textCenter">
    //       <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
    //       <div id="favorite-cat">corgi</div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Profile;
