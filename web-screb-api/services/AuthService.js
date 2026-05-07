const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_TIME } = require("../utils/envConstants");
const ErrorHandler = require("../utils/errorHandler");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");
const { ERROR_MESSAGES, SUCCESS_MESSAGES } = require("../utils/clientResponseConstants");

class AuthService {
  /**
   * Register a new user and return token
   */
  async register(userData) {
    const { email, password } = userData;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new ErrorHandler(ERROR_MESSAGES.USER_EXISTS, HTTP_STATUS_CODES.BAD_REQUEST);
    }

    const user = await User.create({ email, password });

    // Generate Token after registration
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_TIME,
    });

    return {
      message: SUCCESS_MESSAGES.REGISTERATION_SUCCESSFUL,
      data: {
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      },
    };
  }

  /**
   * Login user and return token
   */
  async login(credentials) {
    const { email, password } = credentials;

    // Check if user exists and include password for comparison
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new ErrorHandler(ERROR_MESSAGES.INVALID_CREDENTIALS, HTTP_STATUS_CODES.UNAUTHORIZED);
    }

    // Check if password is correct
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      throw new ErrorHandler(ERROR_MESSAGES.INVALID_CREDENTIALS, HTTP_STATUS_CODES.UNAUTHORIZED);
    }

    // Generate Token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_TIME,
    });

    return {
      message: SUCCESS_MESSAGES.LOGIN_SUCCESSFUL,
      data: {
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      },
    };
  }
}

module.exports = new AuthService();
