const StoryServiceInstance = require("../services/StoryService");
const RESPONSE = require("../utils/RESPONSE");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");
const { consoleHighlighted } = require("../utils/chalk");
const LOGGER_MESSAGES = require("../utils/logConstants");

/**
 * Get all stories
 */
exports.getStories = async (req, res, next) => {
  try {
    consoleHighlighted.initiate(LOGGER_MESSAGES.FETCH_STORIES);
    
    const responseData = await StoryServiceInstance.getAllStories(req.query);

    consoleHighlighted.success(LOGGER_MESSAGES.FETCH_STORIES_COMPLETED);

    RESPONSE.handleSuccessResponse(
      HTTP_STATUS_CODES.OK,
      "Stories fetched successfully",
      responseData,
      res
    );
  } catch (error) {
    consoleHighlighted.error(LOGGER_MESSAGES.FETCH_STORIES_FAILED);
    next(error);
  }
};

/**
 * Get single story
 */
exports.getStoryById = async (req, res, next) => {
  try {
    const responseData = await StoryServiceInstance.getStoryById(req.params.id);

    RESPONSE.handleSuccessResponse(
      HTTP_STATUS_CODES.OK,
      "Story fetched successfully",
      responseData,
      res
    );
  } catch (error) {
    next(error);
  }
};

/**
 * Toggle bookmark
 */
exports.toggleBookmark = async (req, res, next) => {
  try {
    const responseData = await StoryServiceInstance.toggleBookmark(req.user.id, req.params.id);

    RESPONSE.handleSuccessResponse(
      HTTP_STATUS_CODES.OK,
      responseData.message,
      responseData,
      res
    );
  } catch (error) {
    next(error);
  }
};
