const app = require("./app");
const connectDatabase = require("./db/database");
const { chalk } = require("./utils/chalk");
const { MESSAGES } = require("./utils/appConstants");
const { PORT, NODE_ENV } = require("./utils/envConstants");

// Connect to database and then start server 
connectDatabase();

const server = app.listen(PORT, async () => {
  console.log(
    `${MESSAGES.PORT_LISTEN}${chalk.yellow(`${PORT} in ${NODE_ENV}`)}`
  );
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (error) => {
  console.log(`${chalk.bgRed.white("Error: ")} ${error.message}`);
  console.log("Shutting down the server due to unhandled rejection error");
  server.close(() => {
    process.exit(1);
  });
});

// Handle Uncaught exceptions
process.on("uncaughtException", (error) => {
  console.log(`${chalk.bgRed.white("Error: ")} ${error.message}`);
  console.log("Shutting down the server due to uncaught rejection error");
  server.close(() => {
    process.exit(1);
  });
});
