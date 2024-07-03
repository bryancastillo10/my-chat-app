import mongoose from "mongoose";

const profInfoSchema = new mongoose.Schema(
  {
    birthday: {
      type: Date,
      default: "",
      unique: false,
    },
    hobbies: {
      type: [String],
      required: false,
      enum: [
        "singing",
        "dancing",
        "reading",
        "traveling",
        "cooking",
        "gardening",
        "painting",
        "writing",
        "sports",
        "photography",
      ],
    },
    motto: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const ProfInfo = mongoose.model("ProfInfo", profInfoSchema);

export default ProfInfo;
