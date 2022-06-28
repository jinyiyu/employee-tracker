const getAnswers = require("./utils/getAnswers");

// questions list
const loopingQuestion = [
  {
    name: "toDo",
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
const actionPoint = getAnswers(loopingQuestion);
console.log(actionPoint);
