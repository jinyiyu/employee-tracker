const inquirer = require("inquirer");

const getAnswers = async (questions) => {
  return await inquirer.prompt(questions);
};

module.exports = getAnswers;
