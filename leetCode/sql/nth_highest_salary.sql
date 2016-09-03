DROP TABLE IF EXISTS Employee CASCADE;
CREATE TABLE Employee(
  Id SERIAL PRIMARY KEY,
  Salary INTEGER
);

INSERT INTO Employee(Salary)
VALUES
(100),
(200),
(600),
(600),
(800),
(300);

CREATE OR REPLACE FUNCTION nthHighestSalary1(N integer)
RETURNS integer AS
$$
DECLARE
  N integer = N-1;
BEGIN
  RETURN (
    SELECT Salary
    FROM Employee
    ORDER BY Salary DESC
    LIMIT 1 OFFSET N
  );
END;
$$
LANGUAGE 'plpgsql' IMMUTABLE;

SELECT nthHighestSalary1(2);
