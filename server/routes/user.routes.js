import express, { Router } from "express";
import {
  getUsersForSidebar,
  profilePictureChoices,
  updateProfilePicture,
  updateFullName,
  updateUserName,
  deleteAccount
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/connections", protectRoute, getUsersForSidebar);
router.post("/profile-pictures", protectRoute, profilePictureChoices);
router.put("/update/profile/:id", protectRoute, updateProfilePicture);
router.put("/update/fullname/:id", protectRoute, updateFullName);
router.put("/update/username/:id", protectRoute, updateUserName); 
router.delete("/delete/account/:id", protectRoute, deleteAccount);

export default router;
