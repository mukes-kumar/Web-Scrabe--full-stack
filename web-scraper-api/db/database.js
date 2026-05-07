const mongoose = require("mongoose");
const { DBCONNECTION } = require("../utils/appConstants");
const { consoleHighlighted } = require("../utils/chalk");
const { DB_LOCAL_URI, DB_NAME } = require("../utils/envConstants");

const connectDatabase = () => {
  mongoose
    .connect(DB_LOCAL_URI, {
      dbName: DB_NAME,
    })
    .then((_) => {
      consoleHighlighted.success(DBCONNECTION.SUCCESSFUL);
    });
};
module.exports = connectDatabase;
