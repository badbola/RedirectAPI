const fastify = require("fastify");

const port = 8000;

const app = fastify();

app.register(require("./api/route/redirect"), { prefix: "/" });
app.listen(port, function (err) {
  if (err) {
    console.log(`Error recorded initially is ${err} on port${port}`);
  }
  console.log(`Running easy on ${port}`);
});
