CREATE TABLE users(
 user_id SERIAL PRIMARY KEY,
 username VARCHAR (50) NOT NULL,
 email VARCHAR (50) NOT NULL,
 password VARCHAR (200) NOT NULL,
 name VARCHAR (50) NOT NULL,
profile_pic	VARCHAR(50),
 city VARCHAR (50),
 website VARCHAR(50)	
 	
)