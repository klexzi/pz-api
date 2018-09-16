const express = require("express");
const config = require("config");
const logger = require("./api/setups/logger");
const app = express();

if (!config.get("JWTSecret")) {
  logger.error(`JWT not set, exiting app....${config.get("JWTSecret")}`);
  process.exit(1);
}
app.set("port", process.env.PORT || 3000);
app.use(express.json());
require("./api/setups/db")();
require("./api/setups/routes")(app);

app.listen(app.get("port"), () => {
  logger.info(`listening on port ${app.get("port")}`);
});
