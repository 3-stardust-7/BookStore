import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

export default router;







/*router.post("/addBooks", async (req, res) => {
  try {
    const books = req.body; // Expecting an array of book objects
    const savedBooks = await Book.insertMany(books);
    res.status(201).json(savedBooks);
  } catch (error) {
    console.error("Error adding books:", error);
    res.status(500).json({ message: "Error adding books", error });
  }
});*/
