import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Local Imports
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import connectToDb from "./db/connectMongo.js";

// Declared Variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Server is Ready");
// });

// MiddleWare
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);
app.use("/messages", messagesRoutes);

app.listen(PORT, () => {
  connectToDb();
  console.log(`Listening on port ${PORT}`);
});
