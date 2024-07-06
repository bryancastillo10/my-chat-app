import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


// Local Imports
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";
import profileRoutes from "./routes/profileinfo.routes.js";
import connectToDb from "./db/connectMongo.js";
import { app, server } from "./socket/socket.js";

// Declared Variables
dotenv.config();
const PORT = process.env.PORT || 5000;


// Server Run Validation
app.get("/", (req, res) => {
  res.status(200).json({message:"SpaceChat App Server is here!"})
});

// Middleware
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  method:["POST","GET","PUT","DELETE"],
  credentials:true,
}))

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profileinfo", profileRoutes);



server.listen(PORT, () => {
  connectToDb();
  console.log(`Listening on port ${PORT}`);
});
