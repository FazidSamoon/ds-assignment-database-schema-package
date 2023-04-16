import Mongoose from "mongoose";

const OrderSchema = new Mongoose.Schema(
  {
    userID: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: {
      type: [
        {
          productID: {
            type:  Mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const OrderModel = Mongoose.model("Order", OrderSchema);
export { OrderModel };
