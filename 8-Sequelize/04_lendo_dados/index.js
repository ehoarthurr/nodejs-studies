const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });
  res.render("home", { users: users });
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
