DROP DATABASE IF EXISTS db_employment;

CREATE DATABASE db_employment;

USE db_employment;

CREATE table department (
id INT PRIMARY KEY NOT NULL auto_increment,
`Name` VARCHAR(30) NOT NULL
);

CREATE table `role`(
id INT PRIMARY KEY NOT NULL auto_increment,
title VARCHAR(30) NOT NULL,
salary DECIMAL(8,2),
department_id INT NOT NULL
);

CREATE table employee (
id INT PRIMARY KEY NOT NULL auto_increment,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT
);