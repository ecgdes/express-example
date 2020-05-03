const path = require("path");
const express = require("express");
const morgan = require("morgan");
const verify = require("./auth/verify");

const dotenv = require("dotenv");
dotenv.config();

const mongoDbConnection = require("./db/connection");

const app = express();
app.set("PORT", process.env.PORT || 3000);

const static = express.static(path.join(__dirname, "public"));
app.use(static);
const json = express.json();
app.use(json);

app.use(morgan("common"));

// routes

let routes = {
  main: require("./routes/main.routes"),
  users: require("./routes/user.routes"),
  posts: require("./routes/post.routes"),
  auth: require("./auth/auth"),
};

//public access

app.use("/auth", routes.auth);
app.use("/", routes.main);

//auth required

app.use("/api/users", verify, routes.users);
app.use("/api/posts", verify, routes.posts);

//  server listening

app.listen(app.get("PORT"), () => {
  console.log("Server listening on port", app.get("PORT"));
});
