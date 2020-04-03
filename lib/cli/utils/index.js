"use strict";

var chalk = require("chalk");

function log(msg) {
  console.log(chalk.green("vite.js log: " + msg));
}
function error(error) {
  console.error(chalk.red("vite.js err: " + error.message));
}
module.exports = {
  log: log,
  error: error
};