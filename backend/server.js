import express from "express";

import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloundinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Nhin gi");
});

app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

app.listen(port, (req, res) => console.log("listening: " + port));
