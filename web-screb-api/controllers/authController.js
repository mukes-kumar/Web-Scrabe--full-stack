const { consoleHighlighted } = require("../utils/chalk");
const LOGGER_MESSAGES = require("../utils/logConstants");
const { registerValidationSchema, loginValidationSchema } = require("../validations/authValidation");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");
const AuthServiceInstance = require("../services/AuthService");
const RESPONSE = require("../utils/RESPONSE");
const ErrorHandler = require("../utils/errorHandler");

/**
 * Register User
 */
exports.register = async (req, res, next) => {
  try {
    consoleHighlighted.initiate(LOGGER_MESSAGES.USER_REGISTER);

    const { error, value } = registerValidationSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      throw new ErrorHandler(
        `Validation failed: ${error.details.map((err) => err.message).join(", ")}`,
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }

    const responseData = await AuthServiceInstance.register(value);

    consoleHighlighted.success(LOGGER_MESSAGES.USER_REGISTER_COMPLETED);

    RESPONSE.handleSuccessResponse(
      HTTP_STATUS_CODES.CREATED,
      responseData.message,
      responseData.data,
      res
    );
  } catch (error) {
    consoleHighlighted.error(LOGGER_MESSAGES.USER_REGISTER_FAILED);
    next(error);
  }
};

/**
 * Login User
 */
exports.login = async (req, res, next) => {
  try {
    consoleHighlighted.initiate(LOGGER_MESSAGES.USER_LOGIN);

    const { error, value } = loginValidationSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      throw new ErrorHandler(
        `Validation failed: ${error.details.map((err) => err.message).join(", ")}`,
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }

    const responseData = await AuthServiceInstance.login(value);

    consoleHighlighted.success(LOGGER_MESSAGES.USER_LOGIN_COMPLETED);

    RESPONSE.handleSuccessResponse(
      HTTP_STATUS_CODES.OK,
      responseData.message,
      responseData.data,
      res
    );
  } catch (error) {
    consoleHighlighted.error(LOGGER_MESSAGES.USER_LOGIN_FAILED);
    next(error);
  }
};
