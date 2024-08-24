import express from "express";

import { createClub,listClubs } from "../controllers/club.controller.js";
const router=express.Router();

router.post("/create",createClub);
router.get("/list",listClubs)

export default  router;
