DROP TABLE IF EXISTS Employee CASCADE;
CREATE TABLE Employee(
  Id SERIAL PRIMARY KEY,
  Salary INTEGER
);

INSERT INTO Employee(Salary)
VALUES
(100),
(200),
(NULL),
(300);

/* SELECT max(Salary) AS Second_Highest */
/* FROM Employee WHERE Salary < */
/* (SELECT max(Salary) FROM Employee) */

SELECT Salary AS Second_Highest
FROM Employee
LIMIT 1 OFFSET 1;
