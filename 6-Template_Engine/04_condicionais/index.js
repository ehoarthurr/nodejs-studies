const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine()); // app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/", (req, res) => {
  const user = {
    name: "Arthur",
    surname: "Danielson",
    age: 30,
  };

  const palavra = "Teste";

  const auth = false;

  res.render("home", { user: user, palavra, auth });
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
