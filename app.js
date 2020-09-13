const app = require("express")();

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (_req, res) => {
  res.send("<h1>Hello, this is my Node App</h1>").end();
});
