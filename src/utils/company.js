const inquirer = require("inquirer");
const getAnswers = require("./getAnswers");

const getAllDepartments = async (db) => {
  const departments = await db.query("SELECT * FROM departments");
  console.table(departments);
};

module.exports = { getAllDepartments };
