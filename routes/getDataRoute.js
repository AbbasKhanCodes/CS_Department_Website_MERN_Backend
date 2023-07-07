import express from "express";

import getAllData from "../controllers/getAllData.js";

const getDataRoute = express.Router();

getDataRoute.get("/getalldata", getAllData);

export default getDataRoute;
