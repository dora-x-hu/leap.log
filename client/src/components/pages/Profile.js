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
    }).then((result) => {
      if (!categories.map((c) => c.name).includes(result.name)) {
        setCategories(categories.concat(result));
      }
    });
    //document.getElementById(thisCategory).value = "";
  };

  const submitPrompt = (thisPrompt, category_id) => {
    console.log(thisPrompt);
    post("/api/prompt", {
      category_id: category_id,
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

  // MAKE PROFILE SHOW DEFAULT PROMPTS
  /*useEffect(() => {
    get("/api/prompts", { user_id: props.userId }).then((promptlistObj) => {
      setPrompts(promptlistObj);
    });
  }, []);*/

  useEffect(() => {
    // console.log("hello", props.userId);
    document.title = "Profile Page";

    submitCategory("emotions");
    submitCategory("habits");
    submitCategory("academic");
    submitCategory("traveling");

    get("/api/prompts", { user_id: props.userId }).then((promptlistObj) => {
      // console.log("sup", promptlistObj);
      setPrompts(promptlistObj);
    });
    get("/api/categories", { user_id: props.userId, isSelected: true }).then((categorylistObj) => {
      // console.log(categorylistObj);
      setCategories(categories.concat(categorylistObj));
    });
  }, [props.userId]);

  // useEffect(() => {
  //   let tempPrompts;
  //   console.log(prompts);
  //   if (prompts.length > 0) {
  //     console.log("hello");
  //     tempPrompts = prompts.map((responseObj) => {
  //       // console.log(responseObj);
  //       return <SinglePrompt content={responseObj.content} category_id={responseObj.category_id} />;
  //       //promptsList = prompts;
  //     });
  //   } else {
  //     tempPrompts = "No Prompts Yet";
  //   }
  //   setPromptsList(tempPrompts);
  //   console.log(tempPrompts);
  // }, [prompts]);

  useEffect(() => {
    // console.log(prompts);
    setPromptsList([]);
    if (categories.length > 0) {
      // console.log("hello categories", categories);
      for (let cat = 0; cat < categories.length; cat++) {
        if (categories[cat].isSelected) {
          let specific_prompts = [];

          const category_id = categories[cat].name;
          // console.log(category_id);
          // console.log(categories[cat].user_id);
          for (let p = 0; p < prompts.length; p++) {
            if (prompts[p].category_id === category_id) {
              specific_prompts = specific_prompts.concat(prompts[p]);
              // console.log(category_id, prompts[p].content);
            }
          }
          // console.log(specific_prompts);
          setPromptsList((promptsList) =>
            promptsList.concat(
              <div>
                <SinglePrompt category_id={category_id} prompts={specific_prompts} />{" "}
                <input type="text" placeholder="new prompt..." id={category_id}></input>
                <button
                  // id={category_id}
                  className="Prompt-button"
                  onClick={() => {
                    console.log(document.getElementById(category_id).value);
                    if (document.getElementById(category_id).value.replace(/\s+/g, "") !== "") {
                      submitPrompt(document.getElementById(category_id).value, category_id);
                    }
                    {
                      // console.log(category_id);
                    }
                  }}
                >
                  submit
                </button>
              </div>
            )
          );
        }
      }
    }
  }, [prompts, categories]);

  // useEffect(() => {
  //   let tempCateogry;
  //   console.log(categories);
  //   if (categories.length > 0) {
  //     console.log("hello");
  //     tempCategory = categories.map((responseObj) => {
  //       // console.log(responseObj);
  //       // return <SinglePrompt content={responseObj.content} category_id={responseObj.category_id} />;
  //       //promptsList = prompts;
  //     });
  //   } else {
  //     tempCateogry = "No Categories Yet";
  //   }
  //   setCategories(tempCateogry);
  //   console.log(tempCateogry);
  // }, [categories]);

  //const addNewPrompt = (promptObj) => {
  //setStories([promptObj].concat(stories));
  //};

  //TO DO: filter based on param isSelected

  // //   get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));

  // let promptsList = null;
  // let categoriesList = null;
  // const hasPrompts = prompts.length !== 0;
  // const hasCategories = categories.length !== 0;

  // if (hasCategories) {
  //   categoriesList = categories.map((responseObj) => {
  //     <SinglePrompt content={responseObj.content} category_id={responseObj.category_id} />;
  //   });
  // } else {
  //   categoriesList = "No Categories Yet";
  // }

  return (
    <>
      <div className="Profile-section">
        <h1 className="Profile-heading1">my profile</h1>
        <ul className="Profile-prompt">{promptsList}</ul>
        {/* <ul className="categories-prompts">{categoriesList}</ul> */}
        {/* {console.log("hi", categoriesList)} */}
      </div>

      <div>
        <input type="text" placeholder="new category..." id="newCategory"></input>
        <button
          className="Prompt-button"
          onClick={() => {
            if (document.getElementById("newCategory").value.replace(/\s+/g, "") !== "") {
              submitCategory(document.getElementById("newCategory").value);
            }
          }}
        >
          submit
        </button>

        {/* <input type="text" Placeholder="new prompt..." id="newPrompt"></input>
        <button
          className="Prompt-button"
          onClick={() => {
            submitPrompt(document.getElementById("newPrompt").value);
          }}
        >
          submit
        </button> */}
      </div>
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
