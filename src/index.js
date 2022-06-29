const mysql = require("mysql2/promise");
const { getAllDepartments } = require("./utils/company");
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

  //connect your database
  const db = await mysql.createConnection(config);

  let status = true;

  while (status) {
    const { actionPoint } = await getAnswers(loopingQuestion);
    if (actionPoint === "viewAllDepartments") {
      await getAllDepartments(db);
    } else if (actionPoint === "viewAllRoles") {
      console.log("viewAllRoles");
    } else if (actionPoint === "viewAllEmployees") {
      console.log("viewAllEmployees");
    } else if (actionPoint === "addDepartment") {
      console.log("addDepartment");
    } else if (actionPoint === "addRole") {
      console.log("addRole");
    } else if (actionPoint === "addAnEmployee") {
      console.log("addAnEmployee");
    } else if (actionPoint === "updateAnEmployeeRole") {
      console.log("updateAnEmployeeRole");
    } else {
      status = false;
      await db.end();
    }
  }
};

init();
