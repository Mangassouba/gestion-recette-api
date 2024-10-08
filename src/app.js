import connPool from "./config/db.js";
import express from "express";
import recipeRoutes from "./routes/index.js";
import categoryRoutes from "./routes/categoryRoute.js";
import bodyParser from "body-parser";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173/",
};

const app = express();
app.use(cors("*", corsOptions));
const port = 3070;
app.use(bodyParser.json());
app.use(recipeRoutes);
app.use(categoryRoutes);
const connect = connPool.getConnection();

console.log(connect);

app.get("/", (_req, res) => {
  res.send("Bonjour les simploniens");
});

app.listen(port, () => {
  console.log(`L'application est en ecoute sur port ${port}`);
});
