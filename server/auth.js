const { OAuth2Client } = require("google-auth-library");
const User = require("./models/user");
// i added
const Question = require("./models/question");
const socketManager = require("./server-socket");
const category = require("./models/category");

// create a new OAuth client used to verify google sign-in
//    TODO: replace with your own CLIENT_ID
const CLIENT_ID = "379531489685-7mgu977nsn7s5ei091hilu992i1vnch8.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

/*function defaultPrompts(newUser) {
  const newCategory = new category({
    name: "emotions",
    user_id: newUser._id,
    isSelected: true,
  });
  newCategory.save();

  const newCategory = new category({
    name: "food",
    user_id: newUser._id,
    isSelected: true,
  });
  newCategory.save();

  const newCategory = new category({
    name: "sleep",
    user_id: newUser._id,
    isSelected: true,
  });
  newCategory.save();
}*/

// accepts a login token from the frontend, and verifies that it's legit
function verify(token) {
  return client
    .verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    })
    .then((ticket) => ticket.getPayload());
}

// gets user from DB, or makes a new account if it doesn't exist yet
function getOrCreateUser(user) {
  // the "sub" field means "subject", which is a unique identifier for each user
  return User.findOne({ googleid: user.sub }).then((existingUser) => {
    if (existingUser) return existingUser;

    const newUser = new User({
      name: user.name,
      googleid: user.sub,
      hasCompletedSurvey: false,
    });

    // adds new default prompts
    /*post("/api/prompt", {
      category_id: "default",
      content: "default prompt",
      user_id: newUser.googleid,
      isSelected: true,
    });*/

    newUser.save().then((newUser) => {
      const newPrompt = new Question({
        category_id: "default",
        content: "default prompt",
        user_id: newUser._id,
        isSelected: true,
      });
      newPrompt.save();
      //defaultPrompts(newUser);

      const newCategory = new category({
        name: "emotions",
        user_id: newUser._id,
        isSelected: true,
      });
      newCategory.save();

      const newCat = new category({
        name: "food",
        user_id: newUser._id,
        isSelected: true,
      });
      newCat.save();

      const neCategory = new category({
        name: "sleep",
        user_id: newUser._id,
        isSelected: true,
      });
      neCategory.save();
    });

    return newUser;
    // newUser.save() is what actually saves the user to the database
  });
}

function login(req, res) {
  verify(req.body.token)
    .then((user) => getOrCreateUser(user))
    .then((user) => {
      // persist user in the session
      req.session.user = user;
      res.send(user);
    })
    .catch((err) => {
      console.log(`Failed to log in: ${err}`);
      res.status(401).send({ err });
    });
}

function logout(req, res) {
  req.session.user = null;
  res.send({});
}

function populateCurrentUser(req, res, next) {
  // simply populate "req.user" for convenience
  req.user = req.session.user;
  next();
}

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return res.status(401).send({ err: "not logged in" });
  }

  next();
}

module.exports = {
  login,
  logout,
  populateCurrentUser,
  ensureLoggedIn,
};
