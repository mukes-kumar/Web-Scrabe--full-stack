const { chalk } = require("./chalk");

const MESSAGES = {
  PORT_LISTEN: chalk.magenta("Server is now running on port: "),
};

const ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  VALIDATION_ERROR: "Validation error.",
};

const DBCONNECTION = {
  SUCCESSFUL: chalk.green("Connected to MongoDB"),
  UNSUCCESSFUL: chalk.red("MongoDB connection error"),
  ERROR: chalk.red("MongoDB connection error"),
  RECONNECTED: chalk.yellow("Reconnected to MongoDB"),
  DISCONNECTED: chalk.yellow("MongoDB disconnected. Reconnecting..."),
};
265E-0106
const TOKEN = {
  PERFIX_TOKEN: "Bearer",
};


const AUTH_SERVICE_FOR_VALUES = {
  lOGIN: "login",
  REGISTER: "register",
};



module.exports = {
  ERROR_MESSAGES,
  MESSAGES,
  DBCONNECTION,
  TOKEN,
  AUTH_SERVICE_FOR_VALUES,
};
