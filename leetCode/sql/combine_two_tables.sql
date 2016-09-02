DROP TABLE IF EXISTS Person CASCADE;
CREATE TABLE Person(
  PersonId SERIAL PRIMARY KEY,
  FirstName VARCHAR(20),
  LastName VARCHAR(20)
);

DROP TABLE IF EXISTS Address CASCADE;
CREATE TABLE Address(
  AddressId SERIAL PRIMARY KEY,
  PersonId INTEGER,
  City VARCHAR(20),
  State VARCHAR(20)
);

INSERT INTO Person(FirstName, LastName)
VALUES ('James', 'Youn'),
('Phillip', 'Youn'),
('Bow', 'Wow'),
('Moo', 'York'),
('Quack', 'Quack'),
('No', 'Address');

INSERT INTO Address(PersonId, City, State)
VALUES
(1, 'San Francisco', 'CA'),
(2, 'Copenhagen', 'Denmark'),
(3, 'Seoul', 'Korea'),
(4, 'Portland', 'OR'),
(5, 'New York', 'NY');

SELECT FirstName, LastName, City
FROM Person
LEFT JOIN Address ON Person.PersonId=Address.PersonId
