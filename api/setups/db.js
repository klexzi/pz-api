const mongoose = require("mongoose");
const config = require("config");
const logger = require("./logger");

module.exports = function() {
  if (!config.get("mongoDB")) {
    logger.error("Database path not set, exiting.....");
    process.exit(1);
  }
  mongoose
    .connect(
      config.get("mongoDB"),
      { autoIndex: false }
    )
    .then(logger.info("connected to Database"))
    .catch(err => logger.error(`Could not connect to to database ${err}`));
};
