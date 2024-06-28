import express, { Router } from "express";
import {
  addInfo,
  updateInfo,
  deleteInfo,
} from "../controllers/profileinfo.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/add", protectRoute, addInfo);
router.put("/update/:id", protectRoute, updateInfo);
router.delete("/delete/:id", protectRoute, deleteInfo);
