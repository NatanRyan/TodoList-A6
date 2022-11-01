const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const conexaoBD = require("./database/db");

conexaoBD();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);


app.listen(port, () =>
  console.log(`Servidor Rodando em http://localhost:${3000}`)
);
