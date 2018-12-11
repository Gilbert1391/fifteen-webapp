const express = require("express");
const menus = require("./routes/menus");

const app = express();
require("./startup/db")();

app.use(express.json());
app.use("/api/menus", menus);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
