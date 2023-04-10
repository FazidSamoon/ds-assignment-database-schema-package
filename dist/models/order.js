"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OrderSchema = new _mongoose["default"].Schema({
  userID: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  products: {
    type: [{
      productID: {
        type: String
      },
      quantity: {
        type: Number,
        "default": 1
      }
    }]
  },
  amount: {
    type: Number,
    required: true
  },
  address: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    "default": "Pending"
  }
}, {
  timestamps: true
});
var OrderModel = _mongoose["default"].model("Order", OrderSchema);
exports.OrderModel = OrderModel;
//# sourceMappingURL=order.js.map