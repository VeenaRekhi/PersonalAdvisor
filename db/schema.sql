CREATE DATABASE personalAdvisor_db;

USE personalAdvisor_db;

CREATE TABLE user (
	user_id int NOT NULL AUTO_INCREMENT,
	first_name VARCHAR (50) NULL,
    last_name VARCHAR (50) NULL,
	email VARCHAR (255),
    password VARCHAR (25) NULL,
    PRIMARY KEY (user_id)
);


CREATE TABLE portfolio (
    model_id INTEGER NOT NULL AUTO_INCREMENT,
    risk_tolerance VARCHAR(25),
    investment_duration INTEGER,
    initial_deposit DECIMAL (10,2),
    monthly_contribution DECIMAL (10,2),
    yearly_contribution DECIMAL (10,2),
    email_alerts VARCHAR (5),
    selected_model VARCHAR (100),
	user_id int NOT NULL,
    PRIMARY KEY (model_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

SELECT * FROM user;