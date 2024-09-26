import connPool from "./config/db.js";
import express from "express";
// import bodyParser from 'body-parser';
import recipeRoutes from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();
const port = 3070;
app.use(bodyParser.json());
app.use(recipeRoutes);
const connect = connPool.getConnection();

console.log(connect);

app.get("/", (_req, res) => {
  res.send("Bonjour les simploniens");
});

app.listen(port, () => {
  console.log(`L'application est en ecoute sur port ${port}`);
});
