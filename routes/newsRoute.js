import express from "express";

import addNews from "../controllers/addNews.js";

const newsRouter = express.Router();

newsRouter.post("/addnews", addNews);

export default newsRouter;
