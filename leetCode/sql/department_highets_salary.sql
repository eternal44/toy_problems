/* Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department. */

DROP TABLE IF EXISTS Employee CASCADE;
CREATE TABLE Employee(
  id SERIAL PRIMARY KEY,
  Name VARCHAR(20),
  Salary Integer,
  DepartmentId Integer
);

DROP TABLE IF EXISTS Department CASCADE;
CREATE TABLE Department(
  id SERIAL PRIMARY KEY,
  Name VARCHAR(20)
);

INSERT INTO Employee(Name, Salary, DepartmentId)
VALUES ('Joe', 70000, 1),
('Henry', 80000, 2),
('Sam', 60000, 2),
('Shawn', 90000, 2),
('Shawn', 90000, 2),
('John', 90000, 2),
('Mark', 50000, 2),
('Max', 90000, 1);

INSERT INTO Department(Name)
VALUES ('IT'),
('Sales');

SELECT DISTINCT E.Name, E.Salary, D.Name
FROM
  (SELECT max(Salary) Salary, DepartmentId
  FROM Employee
  GROUP BY DepartmentId
  LIMIT 2
  ) M
INNER JOIN Employee E ON M.DepartmentId=E.DepartmentId AND M.Salary=E.Salary
INNER JOIN Department D ON M.DepartmentId=D.Id
