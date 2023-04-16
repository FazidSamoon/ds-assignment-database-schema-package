"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ratingSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  product: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Product"
  },
  ratingType: {
    type: String,
    "enum": ["PRODUCT", "SELLER"],
    required: true
  },
  seller: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  rating: {
    type: Number
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true
});
var Rating = _mongoose["default"].model("Rating", ratingSchema);
exports.Rating = Rating;
//# sourceMappingURL=ratings.js.map