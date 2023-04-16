import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    ratingType: { type: String, enum: ["PRODUCT", "SELLER"], required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Rating = mongoose.model("Rating", ratingSchema);

export { Rating };