const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = require("../utils/envConstants");
const ErrorHandler = require("../utils/errorHandler");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");
const { ERROR_MESSAGES } = require("../utils/clientResponseConstants");

/**
 * Authentication Middleware
 */
exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new ErrorHandler("Login first to access this resource", HTTP_STATUS_CODES.UNAUTHORIZED)
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return next(
        new ErrorHandler("User not found", HTTP_STATUS_CODES.UNAUTHORIZED)
      );
    }

    next();
  } catch (error) {
    return next(
      new ErrorHandler("Invalid or expired token", HTTP_STATUS_CODES.UNAUTHORIZED)
    );
  }
};
