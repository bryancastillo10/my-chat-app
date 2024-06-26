import express, { Router } from "express";
import {
  getUsersForSidebar,
  profilePictureChoices,
  updateProfilePicture,
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/connections", protectRoute, getUsersForSidebar);
router.post("/profile-pictures", protectRoute, profilePictureChoices);
router.put("/update/profile/:id", protectRoute, updateProfilePicture);

export default router;
