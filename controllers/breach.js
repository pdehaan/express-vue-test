module.exports = (router) => {
  router.get("/breach", (req, res) => {
    res.redirect("/");
  });

  router.get("/breach/:id", async (req, res) => {
    const breachID = req.params.id.toLowerCase();
    const breach = getBreach(res.app.locals.breaches, breachID);

    if (!breach) {
      return res.redirect("/");
    }

    const title = `Firefox Monitor: ${ breach.Title }`;
    const data = {
      breach,
      breachID,
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
    res.renderVue("breach.vue", data, req.vueOptions);
  });
};

function getBreach(arr=[], name="") {
  return arr.find(breach => breach.Name.toLowerCase() === name.toLowerCase());
}
