const chalk = require("chalk");

chalk.level = 1;

const consoleErrorHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgRed.white("[ERROR]:"),
    coloredMessage ? chalk.red(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleWarnHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgYellow.white("[WARNING]:"),
    coloredMessage ? chalk.yellow(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleSuccessHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgGreen.white("[SUCCESS]:"),
    coloredMessage ? chalk.green(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleInitiateHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgBlue.white("[INITIATED]:"),
    coloredMessage ? chalk.blue(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleSocketConnecteHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgCyanBright.white("[CONNECTED]:"),
    coloredMessage ? chalk.cyanBright(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleSocketDisconnecteHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgYellowBright.white("[DISCONNECTED]:"),
    coloredMessage ? chalk.yellowBright(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleSocketErrorHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgRedBright.white("[SOCKET-ERROR]:"),
    coloredMessage ? chalk.redBright(coloredMessage) : message,
    `- ${new Date()}`
  );
};
const consoleSocketSuccessHighlighted = (coloredMessage, message) => {
  console.log(
    chalk.bgGreenBright.white("[SOCKET-SUCCESS]:"),
    coloredMessage ? chalk.greenBright(coloredMessage) : message,
    `- ${new Date()}`
  );
};

const consoleHighlighted = {
  error: consoleErrorHighlighted,
  warn: consoleWarnHighlighted,
  success: consoleSuccessHighlighted,
  initiate: consoleInitiateHighlighted,
  socketConnect: consoleSocketConnecteHighlighted,
  socketDisconnect: consoleSocketDisconnecteHighlighted,
  socketError: consoleSocketErrorHighlighted,
  socketSuccess: consoleSocketSuccessHighlighted,
};

// Correctly export both chalk and consoleHighlighted as part of an object
module.exports = {
  chalk,
  consoleHighlighted,
};
