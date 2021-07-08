CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  uuid UUID NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  owner_id INT,
  CONSTRAINT fk_owner
    FOREIGN KEY(owner_id)
      REFERENCES owner(id)
);