const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

const getAnswers = require("./getAnswers");

const getAllDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table(departments);
};

const viewAllRoles = () => {
  console.log("viewAllRoles");
};
const viewAllEmployees = () => {
  console.log("viewAllEmployees");
};

const addDepartment = async (db) => {
  const addDepartmentName = [
    {
      type: "input",
      message: "What is the name of the department?",
      name: "name",
    },
  ];
  const { name } = await getAnswers(addDepartmentName);
  await db.query(`INSERT INTO departments (name) VALUES ("${name}")`);
  //add cholk colored bg
  console.log(`New department: ${name} succesfully added`);
};
const addRole = () => {
  console.log("addRole");
};
const addAnEmployee = () => {
  console.log("addAnEmployee");
};
const updateAnEmployeeRole = () => {
  console.log("updateAnEmployeeRole");
};

module.exports = {
  getAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addAnEmployee,
  updateAnEmployeeRole,
};
