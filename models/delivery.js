import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    shippingDate: {
      type: Date,
      required: true,
    },
    deliveryStatus: {
      type: String,
      enum: ["SHIPPED", "DELIEVERED", "CANCELLED", "RETURNED", "PENDING"],
      default: "PENDING",
      required: true,
    },
  },
  { timestamps: true }
);

const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;
