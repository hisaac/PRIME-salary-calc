CREATE TABLE employeeinfo (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  employee_id INTEGER UNIQUE,
  job_title VARCHAR(120),
  salary MONEY,
  active BOOLEAN DEFAULT true
);

INSERT INTO employeeinfo (first_name, last_name, employee_id, job_title, salary)
VALUES ('Isaac', 'Halvorson', 0001, 'Founder & CEO', 100000),
('David', 'Ratner', 0002, 'CFO', 100000),
('Nicholas', 'Holmes', 0003, 'Chief Morale Officer', 80000),
('Reuven', 'Perlman', 0004, 'Chief Comedic Officer', 82099);

SELECT * FROM employeeinfo;
