const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

const getAnswers = require("./getAnswers");

const viewAllDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table(departments);
};

// to do - change the department_id key to other name later
const viewAllRoles = async (db) => {
  const [roles] = await db.query("SELECT * FROM roles");
  console.table(roles);
};

// to do - change the manager and role_id key to other name later
const viewAllEmployees = async (db) => {
  const [employees] = await db.query("SELECT * FROM employees");
  console.table(employees);
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

const addRole = async (db) => {
  // get all department - change to inquirer format
  // get answers - which role you wanna add
  const [departments] = await db.query("SELECT * FROM departments");
  const departmentChoices = departments.map((department) => {
    return { name: department.name, value: department.id };
  });
  console.log(departmentChoices);

  const roleQuestion = [
    {
      type: "input",
      message: "What is the name of the role?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the salary of this role?",
      name: "salary",
    },
    {
      type: "list",
      message: "which department this role belongs to?",
      name: "department_id",
      choices: departmentChoices,
    },
  ];

  const { title, salary, department_id } = await getAnswers(roleQuestion);
  console.log({ title, salary, department_id });
  await db.query(`INSERT INTO roles (title, salary, department_id) 
  VALUES ("${title}","${salary}","${department_id}")`);
};

// to do
const addAnEmployee = () => {
  console.log("addAnEmployee");
};

// to do
const updateAnEmployeeRole = () => {
  console.log("updateAnEmployeeRole");
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addAnEmployee,
  updateAnEmployeeRole,
};
