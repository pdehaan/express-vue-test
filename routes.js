const breachController = require("./controllers/breach");
const mainController = require("./controllers/main");

module.exports = (router) => {
  require("./controllers/breach")(router);
  require("./controllers/main")(router);
};
