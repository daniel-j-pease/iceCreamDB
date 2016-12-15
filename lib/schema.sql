DROP TABLE IF EXISTS sets;

BEGIN;

CREATE TABLE sets (
  set_id SERIAL PRIMARY KEY,
  ex VARCHAR NOT NULL,
  max INT NOT NULL,
  comp INT NOT NULL DEFAULT 0,
  weight INT NOT NULL,
  wkt_date DATE NOT NULL,
  username VARCHAR NOT NULL,
  wkt_num INT NOT NULL
);

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  total_workouts INT NOT NULL DEFAULT 0
);

COMMIT;