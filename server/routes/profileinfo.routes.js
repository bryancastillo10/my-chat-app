import express, { Router } from "express";
import {
  getAllUserProfileInfo,
  addInfo,
  getHobbyOptions,
  getInfo,
  updateInfo,
  deleteInfo,
} from "../controllers/profileinfo.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/allprofileinfo", protectRoute, getAllUserProfileInfo);
router.post("/add", protectRoute, addInfo);
router.get("/hobby-options", getHobbyOptions);
router.get("/view/:id", protectRoute, getInfo);
router.put("/update/:id", protectRoute, updateInfo);
router.delete("/delete/:id", protectRoute, deleteInfo);

export default router;
