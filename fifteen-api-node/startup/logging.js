const winston = require("winston");
require("express-async-errors");

module.exports = function() {
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.Console({ colorize: true, prettyPrint: true })
  );

  process.on("uncaughtException", ex => {
    winston.error(ex.message, ex);
  });

  process.on("unhandledRejection", ex => {
    winston.error(ex.message, ex);
  });
};
