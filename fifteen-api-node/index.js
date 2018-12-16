require("express-async-errors");
const error = require("./middleware/error");
const express = require("express");
const app = express();

require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);
app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
