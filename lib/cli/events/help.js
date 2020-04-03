"use strict";

var _require = require("../utils/index"),
    log = _require.log,
    err = _require.err;

var prompts = require("prompts");
var chalk = require("chalk");
exports.run = function (args) {
  console.log(chalk.hex("#29B120")("                          %8              \n                        !\n                        !\n                        ^\n                       /                       /___                     |=   =|\n                     |     |\n                     |     |\n                     |     |\n                     |     |\n                     |     |\n                     |     |\n                     |     |\n                     |     |\n                     |     |\n                    /|##!##|                   / |##!##|                   /  |##!##|                   |  / ^ | ^   |\n                 | /  ( | )   |\n                 |/   ( | )   |\n                     ((   ))\n                    ((  :  ))\n                    ((  :  ))\n                     ((   ))\n                      (( ))\n                       ( )\n                        .                  "));
  console.log("\n  vite help\n\n    usage: vite <command>\n\n    description: Vite.js is a simple way to bootstrap a nodejs server, use this cli to initialize a project!\n\n    These are common vite commands used in various situations:\n    \n        help       View the help screen + commands\n        init       Create a vite.js project ready to run and tailored to you\n");
};
module.exports.info = {
  name: "help",
  alias: ["helpp", "error"]
};