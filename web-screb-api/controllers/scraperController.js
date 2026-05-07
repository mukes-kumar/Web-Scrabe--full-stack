const ScraperServiceInstance = require("../services/ScraperService");
const RESPONSE = require("../utils/RESPONSE");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");

/**
 * Trigger Scrape manually via API
 */
exports.scrapeStories = async (req, res, next) => {
  try {
    const responseData = await ScraperServiceInstance.scrapeHackerNews();

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
