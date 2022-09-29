const { writeFileSync, appendFileSync } = require("fs");

// Third party libraries used
const BigNumber = require("bignumber.js");
const { config } = require("dotenv");

// 2 minutes in milliseconds
const DURATION = 120000;

const run = () => {
  config({ override: true });

  let { peccalaValue } = process.env;

  let newPeccalaValue = new BigNumber(peccalaValue)
    .multipliedBy(2)
    .plus(1.5)
    .div(7.5)
    .toFixed(18);

  // record
  record(newPeccalaValue);

  //   update .env
  writeFileSync(".env", `peccalaValue=${newPeccalaValue}`);

  console.log("New peccalaValue updated!");
};

const record = (peccalaValue) => {
  appendFileSync("history.csv", `${peccalaValue},${new Date().toJSON()}\n`);
};

// get initial value
config({ override: true });
let { peccalaValue } = process.env;

// execute
record(peccalaValue);
setInterval(run, DURATION);
