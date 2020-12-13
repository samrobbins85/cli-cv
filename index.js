#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");

// Data for the card
const data = {
  name: chalk.bold.green("        Sam Robbins"),

  github: chalk.gray("https://github.com/") + chalk.green("samrobbinsuk"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("sam-robbins-gb"),
  web: chalk.cyan("https://samrobbins.uk"),
  npx: chalk.red("npx") + " " + chalk.white("samrobbins"),

  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

// Build the card
const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

// Print the card
console.log(me);
