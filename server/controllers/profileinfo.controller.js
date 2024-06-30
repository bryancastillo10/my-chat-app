import ProfInfo from "../models/profileinfo.model.js";

export const addInfo = async (req, res) => {
  try {
    const { birthday, hobbies, motto } = req.body;
    const newProfileInfo = new ProfInfo({
      birthday,
      hobbies,
      motto
    });

    if (hobbies & hobbies.length < 1 || hobbies.length > 3) {
      return res.status(400).json({error:"Please select 1 up to 3 hobbies."})
    };

    await newProfileInfo.save();
    res.status(201).json(newProfileInfo);
  }
  catch (error) {
    console.log("Error in addInfo controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getInfo = async (req, res) => {
  try {
    const loggedInId = req.params.id;
    const info = await ProfInfo.findByIdAndUpdate(loggedInId);
    if (!info) {
      return res.status(404).json({error:"Profile information not found." })
    }
    res.status(200).json(info);
  } catch (error) {
    console.log("Error in getInfo controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
    }
}

export const updateInfo = async (req, res) => {
  try {
    const loggedInId = req.params.id;
    const { birthday, hobbies, motto } = req.body;

    if (hobbies && (hobbies.length < 1 || hobbies.length > 3)) {
      return res.status(400).json({ error: "Please select between 1 and 3 hobbies." });
    }


    const dataToUpdate = {}
    if (birthday !== undefined) { dataToUpdate.birthday = birthday };
    if (hobbies !== undefined) { dataToUpdate.hobbies = hobbies };
    if (motto !== undefined) { dataToUpdate.motto = motto };

    const updatedProfile = await ProfInfo.findByIdAndUpdate(
      loggedInId,
      dataToUpdate,
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile information not found." });
    }

    res.status(200).json({
      message: "Profile successfully updated",
      updatedProfile: updatedProfile,
    });
  } catch (error) {
    console.log("Error in updateInfo controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteInfo = async (req, res) => {
  try {
    const loggedInId = req.params.id;
    const info = await ProfInfo.findByIdAndDelete(loggedInId);

    if (!info) {
      return res.status(404).json({ error: "Profile Info not found" });
    }
    res.status(200).json({message:"Profile Info has been deleted"});
  }
  catch (error) {
    console.log("Error in deleteInfo controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
