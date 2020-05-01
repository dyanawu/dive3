DROP TABLE IF EXISTS dives;
DROP TABLE IF EXISTS trips;
DROP TABLE IF EXISTS destinations;
DROP TABLE IF EXISTS countries, operators;

CREATE TABLE operators (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE
);

CREATE TABLE countries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  country_id INTEGER REFERENCES countries (id)
);

CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  start DATE,
  operator_id INTEGER REFERENCES operators (id),
  destination_id INTEGER REFERENCES destinations (id)
);

CREATE TABLE dives (
  id SERIAL PRIMARY KEY,
  trip_id INTEGER REFERENCES trips (id) ON DELETE CASCADE,
  dive_no VARCHAR(20),
  site VARCHAR(50),
  time_in TIMESTAMPTZ,
  time_out TIMESTAMPTZ,
  max_depth REAL NOT NULL DEFAULT 0.0,
  avg_depth REAL NOT NULL DEFAULT 0.0,
  notes VARCHAR(2000),
  img_pubid VARCHAR(50)
);
