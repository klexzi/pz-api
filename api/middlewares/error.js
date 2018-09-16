// if there is any general uncaught error, this runs
const logger = require("../setups/logger");

module.exports = (err, req, res) => {
  logger.error(err.mesage);
  res.status(500).send("something failesd");
};
