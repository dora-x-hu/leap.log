import React, { Component, useState, useEffect } from "react";
import { get, post } from "../../utilities";
import SinglePrompt from "../modules/SinglePrompt.js";
import Login from "../modules/Login.js";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  // const [user, setUser] = useState();

  // TODO: create initial list of prompts and categories
  //let defaultPrompts = ["how do you do", "did you sleep 8 hrs"];

  const [prompts, setPrompts] = useState([]);
  const [promptsList, setPromptsList] = useState([]);
  const [categories, setCategories] = useState([]);
  //const [user, setUser] = useState();

  const submitCategory = (thisCategory) => {
    console.log(thisCategory);
    post("/api/category", {
      name: thisCategory,
      user_id: props.userId,
      isSelected: true,
    });
  };

  const submitPrompt = (thisPrompt) => {
    console.log(thisPrompt);
    post("/api/prompt", {
      category_id: "dummy category",
      content: thisPrompt,
      user_id: props.userId,
      isSelected: true,
    }).then((result) => {
      setPrompts(prompts.concat(result));
    });
    //setPrompts(prompts.concat(thisPrompt));
  };

  // useEffect(() => {
  //   submitPrompt(promptParameter).then(() => {
  //     f;
  //   });
  // });

  useEffect(() => {
    console.log("hello", props.userId);
    document.title = "Profile Page";
    get("/api/prompts", { user_id: props.userId }).then((promptlistObj) => {
      console.log("sup", promptlistObj);
      setPrompts(promptlistObj);
    });
    get("/api/categories").then((categorylistObj) => {
      setCategories(categorylistObj);
    });
  }, [props.userId]);

  useEffect(() => {
    let tempPrompts;
    console.log(prompts);
    if (prompts.length > 0) {
      console.log("hello");
      tempPrompts = prompts.map((responseObj) => {
        // console.log(responseObj);
        return <SinglePrompt content={responseObj.content} category_id={responseObj.category_id} />;
        //promptsList = prompts;
      });
    } else {
      tempPrompts = "No Prompts Yet";
    }
    setPromptsList(tempPrompts);
    console.log(tempPrompts);
  }, [prompts]);

  //const addNewPrompt = (promptObj) => {
  //setStories([promptObj].concat(stories));
  //};

  //TO DO: filter based on param isSelected

  // //   get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));

  // let promptsList = null;
  let categoriesList = null;
  const hasPrompts = prompts.length !== 0;
  const hasCategories = categories.length !== 0;

  if (hasCategories) {
    categoriesList = categories.map((responseObj) => {
      <SinglePrompt content={responseObj.content} category_id={responseObj.category_id} />;
    });
  } else {
    categoriesList = "No Categories Yet";
  }

  return (
    <>
      <div className="Profile-section">
        <h1 className="Profile-heading1">My Profile</h1>
        <ul className="Profile-prompt">{promptsList}</ul>
        <ul>{categoriesList}</ul>
      </div>

      <div>
        <input type="text" Placeholder="new category..." id="newCategory"></input>
        <button
          onClick={() => {
            submitCategory(document.getElementById("newCategory").value);
          }}
        >
          Submit
        </button>
      </div>

      <input type="text" Placeholder="new prompt..." id="newPrompt"></input>
      <button
        onClick={() => {
          submitPrompt(document.getElementById("newPrompt").value);
        }}
      >
        Submit
      </button>
    </>
  );

  // -------------
  //
};

// if (!user) {
//   return (<div> Loading! </div>);
// }

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

export default Profile;
