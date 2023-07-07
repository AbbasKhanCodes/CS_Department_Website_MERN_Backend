import express from "express";

import addEvent from "../controllers/addEvent.js";

const eventRoute = express.Router();

eventRoute.post("/addevent", addEvent);

export default eventRoute;
