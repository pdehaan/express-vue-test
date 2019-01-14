module.exports = (router) => {
  router.get("/", async (req, res) => {
    const breach = req.query.breach;
    if (breach) {
      // Redirect from "/?breach=Adobe" to "/breach/Adobe".
      return res.redirect(`/breach/${ breach }`);
    }

    const title = "Firefox Monitor";
    const data = {
      name: "Peter",
      title
    };
    req.vueOptions = {
      head: {
        title,
        metas: [
          {
            property: "og:title",
            content: title
          }
        ]
      }
    };
    res.renderVue("main.vue", data, req.vueOptions);
  });
};
