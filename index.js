import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import newsRouter from "./routes/newsRoute.js";
import eventRoute from "./routes/eventRoute.js";
import getDataRoute from "./routes/getDataRoute.js";
import loginRouter from "./routes/loginRoute.js";

const app = express();
dotenv.config();

// db
connectDatabase().catch((err) => console.log(err));
async function connectDatabase() {
  await mongoose.connect(process.env.mongo_url, {
    dbName: "awkum_cs_dept_website_db",
  });

  console.log("database conntected");
}

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

// Default route printing hello
app.get("/", (req, res) => {
  res.json("hello");
});

app.use(newsRouter);

app.use(eventRoute);

app.use(getDataRoute);

app.use(loginRouter);

app.listen(process.env.port);
