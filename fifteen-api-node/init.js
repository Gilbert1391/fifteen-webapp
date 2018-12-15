const { Heading } = require("./models/heading");
const { Admin } = require("./models/admin");
const config = require("config");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

async function init() {
  mongoose.connect(
    config.get("db"),
    { useNewUrlParser: true }
  );

  await Heading.deleteMany({});
  await Admin.deleteMany({});

  // Create heading

  const heading = new Heading({
    heading: "The best food in the city",
    subHeading: "Cooking is our passion"
  });

  try {
    await heading.save();
  } catch (ex) {
    console.log(ex.message);
  }

  // create admin

  const admin = new Admin({
    username: "admin",
    password: "12345"
    // password: config.get("adminPassword")
  });

  //const salt = await bcrypt.genSalt(10);
  //admin.password = await bcrypt.hash(admin.password, salt);

  try {
    await admin.save({ username: admin.username });
  } catch (ex) {
    console.log(ex.message);
  }

  mongoose.disconnect();

  console.info("Done");
}

init();
