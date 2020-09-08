async function routes(fastify, options) {
  fastify.get("/", async () => {
    return {
      Message: "Yes it's working",
      Build_By: "Divyanshu",
    };
  });
  fastify.get("/g", async (req, res) => {
    res.redirect("https://www.google.com/");
  });
}

module.exports = routes;
