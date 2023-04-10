"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UserSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
  verification_code: {
    type: String,
    required: false
  },
  is_verified: {
    type: Boolean,
    required: true,
    "default": false
  },
  is_active: {
    type: Boolean,
    required: true,
    "default": true
  },
  role: {
    type: String,
    "enum": ["SELLER", "CUSTOMER"],
    "default": "CUSTOMER",
    required: true
  }
}, {
  timestamps: true
});
var User = _mongoose["default"].model("User", UserSchema);
exports.User = User;
//# sourceMappingURL=userModel.js.map