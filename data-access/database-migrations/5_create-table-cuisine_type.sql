CREATE TABLE cuisine_type (
  id SERIAL PRIMARY KEY,
  uuid UUID NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL
);