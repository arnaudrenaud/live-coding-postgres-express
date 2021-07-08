CREATE TABLE restaurant_cuisine_type (
  restaurant_id INT REFERENCES restaurant(id) ON DELETE CASCADE,
  cuisine_type_id INT REFERENCES cuisine_type(id) ON DELETE CASCADE,
  CONSTRAINT restaurant_cuisine_type_pkey
    PRIMARY KEY (restaurant_id, cuisine_type_id)
);