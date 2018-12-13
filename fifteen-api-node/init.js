const { Heading } = require("./models/heading");
const mongoose = require("mongoose");
const config = require("config");

async function init() {
  mongoose.connect(
    config.get("db"),
    { useNewUrlParser: true }
  );

  await Heading.deleteMany({});

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

  mongoose.disconnect();

  console.info("Done");
}

init();
