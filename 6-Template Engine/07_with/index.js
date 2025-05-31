const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine()); // app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/post", (req, res) => {
  const post = {
    title: "aprender Node.js",
    category: "JavaScript",
    body: "este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  };

  res.render("blogspot", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "Arthur",
    surname: "Danielson",
    age: 30,
  };

  const palavra = "Teste";

  const auth = true;

  const approved = true;

  res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
