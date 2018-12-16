const config = require("config");

module.exports = function() {
  if (!config.get("jwtPrivateKey")) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined");
    process.exit(1);
  }

  // console.log(config.get("adminPassword"));

  // if (!config.get("adminPassword")) {
  //   console.error("FATAL ERROR: adminPassword is not defined");
  //   process.exit(1);
  // }
};
