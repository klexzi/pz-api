// require all routes here
const changePassword = require("../routes/change-password");
const login = require("../routes/login");
const error = require("../middlewares/error");

/*
*@params {app} an instance of express
*/
module.exports = app => {
  // import all routes here
  app.use("/api/login", login);
  app.use("/api/change-password", changePassword);
  app.use(error);

  // catch invalid endpoint request
  app.use((req, res) => {
    res.status(404).send("EndPoint Not Found");
  });
};
