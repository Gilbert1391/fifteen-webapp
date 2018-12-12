const { Heading } = require("./models/heading");
const express = require("express");
const app = express();

require("./startup/db")();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

async function create() {
  const heading = new Heading({
    heading: "The best food in the city",
    subHeading: "Cooking is our passion"
  });

  try {
    const result = await heading.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message);
  }
}

create();
