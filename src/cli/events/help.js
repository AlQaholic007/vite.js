const { log, err } = require("../utils/index");
const prompts = require("prompts");
const chalk = require("chalk");
exports.run = function(args) {
  console.log(
    chalk.hex("#29B120")(`                          %8              
                        !
                        !
                        ^
                       / \
                      /___\
                     |=   =|
                     |     |
                     |     |
                     |     |
                     |     |
                     |     |
                     |     |
                     |     |
                     |     |
                     |     |
                    /|##!##|\
                   / |##!##| \
                  /  |##!##|  \
                 |  / ^ | ^ \  |
                 | /  ( | )  \ |
                 |/   ( | )   \|
                     ((   ))
                    ((  :  ))
                    ((  :  ))
                     ((   ))
                      (( ))
                       ( )
                        .                  `)
  );
  console.log(`
  vite help

    usage: vite <command>

    description: Vite.js is a simple way to bootstrap a nodejs server, use this cli to initialize a project!

    These are common vite commands used in various situations:
    
        help       View the help screen + commands
        init       Create a vite.js project ready to run and tailored to you
`);
};
module.exports.info = {
  name: "help",
  alias: ["helpp", "error"]
};
