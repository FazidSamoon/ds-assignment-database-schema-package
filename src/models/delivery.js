import Mongoose from "mongoose";

const DeliverySchema = new Mongoose.Schema(
  {
    userID: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderID: {
      type: Mongoose.Schema.Types.ObjectId,
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

const DeliveryModel = Mongoose.model("Cart", DeliverySchema);
export { DeliveryModel };
