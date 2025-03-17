const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine); // app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "aprender Node.js",
      category: "JavaScript",
      body: "este artigo vai te ajudar a aprender Node.js...",
      comments: 4,
    },
    {
      title: "aprender PHP",
      category: "PHP",
      body: "este artigo vai te ajudar a aprender PHP...",
      comments: 4,
    },
    {
      title: "aprender Pyhton",
      category: "Python",
      body: "este artigo vai te ajudar a aprender Python...",
      comments: 4,
    },
  ];

  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
