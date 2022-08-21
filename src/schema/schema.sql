DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE table departments (
id INT PRIMARY KEY NOT NULL auto_increment,
name VARCHAR(30) NOT NULL
);

CREATE table roles(
id INT PRIMARY KEY NOT NULL auto_increment,
title VARCHAR(30) NOT NULL,
salary DECIMAL(8,2),
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE table employees (
id INT PRIMARY KEY NOT NULL auto_increment,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES roles(id),
FOREIGN KEY (manager_id) REFERENCES employees(id)
);