DROP DATABASE IF EXISTS "dmi";

CREATE DATABASE "dmi";

\c "dmi"

CREATE TABLE strings (id SERIAL PRIMARY KEY, 
                    body TEXT NOT NULL);

INSERT INTO strings (body) VALUES
    ('First string'),
    ('Second string');