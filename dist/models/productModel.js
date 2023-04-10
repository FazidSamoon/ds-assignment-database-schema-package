"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var productSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  seller: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  quantity: {
    type: Number,
    required: true,
    "default": 0,
    min: 0
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var Product = _mongoose["default"].model("Product", productSchema);
exports.Product = Product;
//# sourceMappingURL=productModel.js.map