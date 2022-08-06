const inquirer = require("inquirer");
const mysql = require("mysql2/promise");

const getAnswers = require("./getAnswers");

const viewAllDepartments = async (db) => {
  const [departments] = await db.query("SELECT * FROM departments");
  console.table(departments);
};

// to do - change the department_id key to other name later
const viewAllRoles = async (db) => {
  const [roles] =
    await db.query(`SELECT roles.id, roles.title AS 'Role', roles.salary AS 'Salary', departments_id AS 'Department' 
  FROM roles 
  LEFT JOIN departments ON roles.department_id = departments.id`);
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

  const [departments] = await db.query("SELECT * FROM departments");
  const departmentChoices = departments.map((department) => {
    return { name: department.name, value: department.id };
  });

  // get answers - which role you wanna add
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

const addAnEmployee = async (db) => {
  // Get all roles from DB and construct role choices
  const [roles] = await db.query("SELECT * FROM roles");
  const roleChoices = roles.map((role) => {
    return { name: role.title, value: role.id };
  });
  console.log(roleChoices);

  // Get all employees from DB and construct employee choices
  const [employees] = await db.query("SELECT * FROM employees");
  const managerList = employees.map((employee) => {
    return {
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    };
  });
  console.log(managerList);

  const roleQuestion = [
    {
      type: "input",
      message: "Please enter the first name of the employee?",
      name: "first_name",
    },
    {
      type: "input",
      message: "Please enter the last name of the employee?",
      name: "last_name",
    },
    {
      type: "list",
      message: "Please select the role the employee belongs to:",
      name: "role_id",
      choices: roleChoices,
    },
    {
      type: "list",
      message: "Please select the employee's manager",
      name: "manager_id",
      choices: managerList,
    },
  ];
  const { first_name, last_name, role_id, manager_id } = await getAnswers(
    roleQuestion
  );
  console.log({ first_name, last_name, role_id, manager_id });
  await db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) 
  VALUES ("${first_name}","${last_name}","${role_id}","${manager_id}")`);
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
