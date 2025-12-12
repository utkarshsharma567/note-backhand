
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRoutes from "./routes/routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database Connection
mongoose.connect(process.env.MONGO_URL, {
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routing Middleware
app.use(express.json());
app.use(cors({
  origin: " http://localhost:5173/" // replace with your frontend URL in production
}));

app.use("/api/v1/notes", noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


