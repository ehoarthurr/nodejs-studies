const express = require("express");
const path = require("path");

const usersRoutes = require("./users");

const app = express();
const PORT = 5000;

const basePath = path.join(__dirname, "/templates");

app.use(express.static("public"));
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.status(200).sendFile(`${basePath}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
