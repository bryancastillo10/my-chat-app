import User from "../models/user.model.js";
import {
  maleProfilePictures,
  femaleProfilePictures,
} from "../utils/profilePictures.js";
import { logoutUser } from "./auth.controller.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    if (!loggedInUserId) {
      return res.status(401).json("Unauthorized access. you are not logged in");
    }

    const allUsers = await User.find({
      _id: {
        $ne: loggedInUserId,
      },
    }).select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const profilePictureChoices = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    if (!loggedInUserId) {
      return res.status(401).json("Unauthorized access. you are not logged in");
    }

    const currentUser = await User.findOne({ _id: loggedInUserId });
    if (!currentUser) {
      return res.status(404).json("User not found");
    }

    let profPicChoices = [];
    if (currentUser.gender === "male") {
      profPicChoices = maleProfilePictures;
    } else if (currentUser.gender === "female") {
      profPicChoices = femaleProfilePictures;
    }

    if (profPicChoices.length > 0) {
      return res.status(200).json({ choices: profPicChoices });
    } else {
      return res
        .status(404)
        .json("No profile pictures available for your gender");
    }
  } catch (error) {
    console.log("Error in profilePictureChoices controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateProfilePicture = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const { profilePicChoice } = req.body;
    if (!loggedInUserId) {
      return res.status(401).json("Unauthorized access. you are not logged in");
    }

    if (!profilePicChoice) {
      return res.status(404).json("Profile Picture Choice is required");
    }

    const currentUser = await User.findById(loggedInUserId);
    if (!currentUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const validProfilePictures =
      currentUser.gender === "male"
        ? maleProfilePictures
        : femaleProfilePictures;
    if (!validProfilePictures.includes(profilePicChoice)) {
      return res
        .status(400)
        .json({ error: "Invalid choice of profile picture" });
    }

    currentUser.profilePic = profilePicChoice;
    await currentUser.save();

    res.json({
      message: "Profile Picture Updated successfully",
      user: currentUser,
    });
  } catch (error) {
    console.log("Error in updateProfilePicture controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};


export const updateUserProfile = async (req, res) => {
  try
  {
    const userId = req.user._id;
    const { fullName, username } = req.body;

    const dataToUpdate = {}
    if (fullName !== undefined) { dataToUpdate.fullName = fullName };
    if (username !== undefined) { dataToUpdate.username = username };

    const updatedName = await User.findByIdAndUpdate(
      userId,
      dataToUpdate,
      { new: true, runValidators: true }
    );

    if (!updatedName) {
      return res.status(404).json({ error:"User not found"});
    }

    res.status(200).json({
      message: "Profile successfully updated",
      updatedName: updatedName
    });
  }
  catch (error) {
    console.log("Error in updateUserProfile controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user._id;

    await User.findByIdAndDelete(userId);

    res.status(200).json({message:"Account has been deleted"});
    logoutUser(req, res);
  } catch (error) {
    console.log("Error in delete account controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
