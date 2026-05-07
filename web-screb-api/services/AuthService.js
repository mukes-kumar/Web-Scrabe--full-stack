const User = require("../models/User");
const ErrorHandler = require("../utils/errorHandler");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");
const { ERROR_MESSAGES, SUCCESS_MESSAGES } = require("../utils/clientResponseConstants");

class AuthService {
  /**
   * Register a new user
   */
  async register(userData) {
    const { email, password } = userData;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new ErrorHandler(ERROR_MESSAGES.USER_EXISTS, HTTP_STATUS_CODES.BAD_REQUEST);
    }

    const user = await User.create({ email, password });

    return {
      message: SUCCESS_MESSAGES.REGISTERATION_SUCCESSFUL,
      data: {
        id: user._id,
        email: user.email,
      },
    };
  }
}

module.exports = new AuthService();
