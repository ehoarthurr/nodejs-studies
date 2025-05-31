const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
  {
    id: 1,
    name: "produto1",
    price: "12.99",
  },
  {
    id: 2,
    name: "produto2",
    price: "5.99",
  },
];

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.get("/product/:id", (req, res) => {
  let product = products[req.params.id - 1];

  res.render("product", { product });
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
