const cTable = require("console.table");
const mysql = require("mysql2/promise");
const {
  getAllDepartments,
  addDepartment,
  viewAllRoles,
  viewAllEmployees,
  addRole,
  addAnEmployee,
  updateAnEmployeeRole,
} = require("./utils/company");
const getAnswers = require("./utils/getAnswers");

// questions list
const loopingQuestion = [
  {
    name: "actionPoint",
    type: "list",
    message:
      "What would you like to do next? (choose one action from the list or quit)",
    choices: [
      { name: "View all departments", value: "viewAllDepartments" },
      { name: "View all roles", value: "viewAllRoles" },
      { name: "View all employees", value: "viewAllEmployees" },
      { name: "Add a department", value: "addDepartment" },
      { name: "Add a role", value: "addRole" },
      { name: "Add an employee", value: "addAnEmployee" },
      { name: "Update an employee role", value: "updateAnEmployeeRole" },
      { name: "Quit", value: "quit" },
    ],
  },
];

const init = async () => {
  // define the config
  const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "company_db",
  };

  //connect the company database
  const db = await mysql.createConnection(config);

  let status = true;

  while (status) {
    const { actionPoint } = await getAnswers(loopingQuestion);
    if (actionPoint === "viewAllDepartments") {
      await getAllDepartments(db);
    } else if (actionPoint === "viewAllRoles") {
      await viewAllRoles(db);
    } else if (actionPoint === "viewAllEmployees") {
      await viewAllEmployees(db);
    } else if (actionPoint === "addDepartment") {
      await addDepartment(db);
    } else if (actionPoint === "addRole") {
      await addRole(db);
    } else if (actionPoint === "addAnEmployee") {
      await addAnEmployee(db);
    } else if (actionPoint === "updateAnEmployeeRole") {
      await updateAnEmployeeRole(db);
    } else {
      status = false;
      await db.end();
    }
  }
};

init();
