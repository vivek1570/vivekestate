import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import listingRoutes from "./routes/listing.routes.js";
import clubRoutes from "./routes/club.routes.js";
dotenv.config();
import cookieParser from "cookie-parser";
import path from "path";

mongoose
  .connect("mongodb+srv://vivek222vettam:nitc1234@mern-estate.ltwxljd.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate")
  .then(() => {
    console.log("Connected to MongoDB!!!");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000!!!");
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/listing", listingRoutes);
app.use("/api/clubs",clubRoutes);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
