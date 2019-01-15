const breachController = require("./controllers/breach");
const mainController = require("./controllers/main");

module.exports = (router) => {
  mainController(router);
  breachController(router);
};
