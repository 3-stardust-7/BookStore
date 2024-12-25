import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors()); //middleware
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

connectDB();

//defining routes
app.use(express.json()); // Middleware to parse JSON
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

/*app.get("/", (req, res) => {
  res.send("BookStore App");
});*/
/*MongoDBURI="mongodb://localhost:27017/Database name"*/
//mongoose has connect method that we use
//const express = require("express");
//const dotenv = require("dotenv");
//const port = 3000;
/**, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } */
