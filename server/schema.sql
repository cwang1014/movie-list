CREATE DATABASE IF NOT EXISTS movielist;

USE movielist;

CREATE TABLE movies (
  movieid INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL UNIQUE,
  watched BOOL NOT NULL DEFAULT false,
  PRIMARY KEY (movieid)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/