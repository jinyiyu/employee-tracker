# employee-profile-generator

## Table of Contents

- [About this Project](#about-this-project)
- [Links to the Project](#Links-to-the-Project)
- [User Story](#User-Story)
- [Criteria](#Criteria)
- [Mock-Up](#Mock-Up)
- [Demo Video](#Demo-Video)
- [Run the project](#Run-the-project)
- [File Structure](#File-Structure)
- [Employee Classes Structure](#Employee-Classes-Structure)
- [Technologies](#Technologies)
- [How To Contact Me](#How-To-Contact-Me)
- [Authored by](#Authored-by)

<br>

## About this Project

```
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. This project is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, I’ll create a walkthrough video that demonstrates its functionality.

```

<br>

## Links to the Project

Check out the Github Repository [Here](https://github.com/jinyiyu/employee-tracker)

<br>

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

<br />

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

<br />

## Demo Video

Check out the Demo Video [Here](./src/video/employee-tracker%20demo%20video.mp4) or [Here](https://drive.google.com/file/d/13pfg9qCP7nhUhfiOQl3nDRgfzLSA1yAi/view)

## Run the project

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub.

You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

The application will be invoked by using the following command:

```bash
git clone git@github.com:jinyiyu/employee-tracker.git
cd employee-tracker
npm init -y
```

Then a package.json file would pop up in your folder, click to enter the file, and change the script to :

```
"start":"node index.js"
```

Then go to your terminal, install relevant dependency packages:

```
npm install mysql2 inquirer
```

And run the project by following the instructions below:

```
npm run start
```

## File Structure

please look at following chart for the directory structure:

```md
.
├── **src**/ //source folder
│ ├── schema
│ ├--── departmentSeeds.sql
│ ├--── employeeSeeds.sql
│ ├--── roleSeeds.sql
│ └─--─ schema.sql
│ ├── utils
│ ├--── company.js
│ └─--─ getAnswers.js
│ ├── video //demo video
│ └─--─ emploee-tracker demo video
│ └─--─ index.js // runs the application
├── dist/ // rendered output (HTML) and CSS style sheet  
├── lib/ // classes
├── .gitignore // indicates which folders and files Git should ignore
├── package.json
└── README.md
```

## Database Structure

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

- `department`

  - `id`: `INT PRIMARY KEY`

  - `name`: `VARCHAR(30)` to hold department name

- `role`

  - `id`: `INT PRIMARY KEY`

  - `title`: `VARCHAR(30)` to hold role title

  - `salary`: `DECIMAL` to hold role salary

  - `department_id`: `INT` to hold reference to department role belongs to

- `employee`

  - `id`: `INT PRIMARY KEY`

  - `first_name`: `VARCHAR(30)` to hold employee first name

  - `last_name`: `VARCHAR(30)` to hold employee last name

  - `role_id`: `INT` to hold reference to employee role

  - `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Technologies

- Javascript
- Node.js
- Inquirer
- mysql
- nodemon
- content management systems (CMS)

<br>

## How To Contact Me

Please contact me if you have any inquiries

[<img height="26" width="26" src="https://raw.githubusercontent.com/jinyiyu/jinyiyu/main/icon/github.svg" />](https://github.com/jinyiyu)
[<img height="26" width="26" src="https://raw.githubusercontent.com/jinyiyu/jinyiyu/main/icon/linkedIn.svg" />](https://www.linkedin.com/in/jinyiyu/)
[<img height="26" width="26" src="https://raw.githubusercontent.com/jinyiyu/jinyiyu/main/icon/instagram.svg" />](https://www.instagram.com/jinyiyu517/)
[<img height="26" width="26" src="https://raw.githubusercontent.com/jinyiyu/jinyiyu/main/icon/gmail.svg" />](mailto:yujinyiicxk@gmail.com)

## Authored by

### **Jinyi Yu**
