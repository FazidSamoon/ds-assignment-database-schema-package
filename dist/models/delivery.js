"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeliverySchema = new _mongoose["default"].Schema({
  userID: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  orderID: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "Order"
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  shippingDate: {
    type: Date,
    required: true
  },
  deliveryStatus: {
    type: String,
    "enum": ["SHIPPED", "DELIEVERED", "CANCELLED", "RETURNED", "PENDING"],
    "default": "PENDING",
    required: true
  }
}, {
  timestamps: true
});
var DeliveryModel = _mongoose["default"].model("Cart", DeliverySchema);
exports.DeliveryModel = DeliveryModel;
//# sourceMappingURL=delivery.js.map