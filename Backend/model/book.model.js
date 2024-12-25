import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    id:Number,
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
});

const Book=mongoose.model("Book",bookSchema);

export default Book;

/**const bookSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Make 'name' required
  title: { type: String, required: true }, // Make 'title' required
  price: { type: Number, required: true, min: 0 }, // Price must be >= 0
  category: { type: String, enum: ["Fiction", "Non-Fiction", "Science", "History"], required: true },
  image: { type: String, default: "default_image.jpg" }, // Default image if not provided
});
 */