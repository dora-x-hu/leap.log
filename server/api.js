/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
//DONE
const User = require("./models/user");
const Category = require("./models/category");
const JournalEntry = require("./models/journalEntry");
const Question = require("./models/question");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

//parameters: day they belong to
//return array of journalEntries depending on day, month, year
router.get("/responses", auth.ensureLoggedIn, (req, res) => {
  JournalEntry.find({
    day: req.query.day,
    month: req.query.month,
    year: req.query.year,
    user_id: req.query.user_id,
  }).then((responses) => {
    console.log(req.query);
    console.log(responses);
    res.send(responses);
  });
});

//parameters in req: day/month/year it belongs to and which question it was
//returns single journalEntry d
router.get("/response", auth.ensureLoggedIn, (req, res) => {
  JournalEntry.find({
    day: req.query.day,
    month: req.query.month,
    year: req.query.year,
    question: req.query.question,
    user_id: req.query.user_id,
  }).then((response) => {
    res.send(response);
  });
});

//no parameters
//returns all questions
//returns array of questions
router.get("/prompts", (req, res) => {
  console.log(req.query.user_id);
  Question.find({ user_id: req.query.user_id }).then((questions) => {
    console.log(questions);
    res.send(questions);
  });
});

//no params
//returns array ofcategories
router.get("/categories", (req, res) => {
  Category.find({}).then((categories) => {
    res.send(categories);
  });
});

//day it belongs to,which question prompted it, updated content
//adds new response then returns it back to client
router.post("/response", auth.ensureLoggedIn, (req, res) => {
  const newJournalEntry = new JournalEntry({
    question: req.body.question,
    content: req.body.content,
    user_id: req.user._id,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
  });

  newJournalEntry.save().then((response) => res.send(response));
});

//creates a new category and returns it
router.post("/category", auth.ensureLoggedIn, (req, res) => {
  console.log(req.body);
  const newCategory = new Category({
    name: req.body.name,
    user_id: req.body.user_id,
    isSelected: req.body.isSelected,
  });

  newCategory.save().then((category) => res.send(category));
});

router.post("/prompt", auth.ensureLoggedIn, (req, res) => {
  const newQuestion = new Question({
    category_id: req.body.category_id, //which category it is, Category is another schema
    content: req.body.content,
    user_id: req.user._id,
    isSelected: req.body.isSelected,
  });

  newQuestion.save().then((question) => res.send(question));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
