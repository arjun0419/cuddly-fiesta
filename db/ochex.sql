DROP DATABASE IF EXISTS ochex;
CREATE DATABASE ochex;

\c ochex;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR,
  user_email VARCHAR
);

CREATE TABLE checkbooks (
  checkbook_id SERIAL PRIMARY KEY,
  checkbook_name VARCHAR
);

CREATE TABLE checks (
  check_id SERIAL PRIMARY KEY,
  checkbook_id INTEGER,
  check_number VARCHAR,
  check_amount MONEY,
  check_to VARCHAR,
  check_date DATE,
  check_added_by INTEGER,
  check_cleared BOOLEAN
);

CREATE TABLE users_checkbooks (
  user_id INTEGER,
  checkbook_id INTEGER,
  owner BOOLEAN
);
