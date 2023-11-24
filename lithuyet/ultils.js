const fs = require("fs");

const logger = (req) => {
  const message = `${req.hostname} \t\t ${req.method} \t\t ${new Date()} \n`;
  fs.appendFile("log.txt", message, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = { logger };