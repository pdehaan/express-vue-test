const path = require("path");

const axios = require("axios");
const express = require("express");
const expressVue = require("express-vue");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

init();

async function init() {
  const breaches = await getBreaches();
  const router = express.Router();
  routes(router);

  const expressVueMiddleware = expressVue.init({
    rootPath: path.join(__dirname, "pages"),
    data: {
      banana: "seven"
    }
  });

  const app = express();
  app.locals.breaches = breaches;
  app.use(expressVueMiddleware);
  app.use(router);
  const server = app.listen(PORT, () => {
    console.log(`server started on ${ server.address().port }`);
  });  
}

async function getBreaches(breachUrl="https://haveibeenpwned.com/api/v2/breaches", sortByKey="AddedDate") {
  try {
    const res = await axios.get(breachUrl, {headers: {"User-Agent": "axios"}});
    return res.data.sort((itemA, itemB) => new Date(itemB[sortByKey]) - new Date(itemA[sortByKey]));
  } catch (err) {
    console.error(err);
  }
}
