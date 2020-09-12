const app = require("express")();

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (_req, res) => {
  res.send("<h1>Hello, this is my node app</h1>").end();
});
