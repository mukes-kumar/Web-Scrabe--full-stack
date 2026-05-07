/**
 * Handle success response
 */
const handleSuccessResponse = (statusCode, message, data, res) => {
  const responseBody = {
    success: true,
    message,
    data,
  };

  return res.status(statusCode).json(responseBody);
};

module.exports = {
  handleSuccessResponse,
};
