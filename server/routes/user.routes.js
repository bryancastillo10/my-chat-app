import express, { Router } from "express";
import {
  getUsersForSidebar,
  profilePictureChoices,
  updateProfilePicture,

  deleteAccount,
  updateUserProfile
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/connections", protectRoute, getUsersForSidebar);
router.post("/profile-pictures", protectRoute, profilePictureChoices);
router.put("/update/profilepicture/:id", protectRoute, updateProfilePicture);
router.put("/update/profile/:id", protectRoute, updateUserProfile);
router.delete("/delete/account/:id", protectRoute, deleteAccount);

export default router;
