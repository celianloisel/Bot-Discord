CREATE DATABASE IF NOT EXISTS cayo_bot;

USE cayo_bot;

CREATE TABLE IF NOT EXISTS ban (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    member_id INT,
    member_name VARCHAR(50),
    moderator_id INT,
    moderator_name VARCHAR(50),
    date DATETIME
);