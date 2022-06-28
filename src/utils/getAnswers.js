const inquirer = require("inquirer");

const getAnswers = async (fn) => {
  return await inquirer.prompt(fn);
};

module.exports = getAnswers;
