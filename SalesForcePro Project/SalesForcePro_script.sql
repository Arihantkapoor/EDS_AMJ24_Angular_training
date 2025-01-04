create database SalesForcePro

USE SalesForcePro

create table leads(
id int primary key identity,
lead_name varchar(max),
email varchar(max),
mobile varchar(10),
lead_address varchar(max),
interest varchar(max),
contacted varchar(1),
)
create table Customer(
id int primary key identity,
customer_name varchar(max),
email varchar(max),
mobile varchar(10),
customer_address varchar(max),
)
create table UserCredential(
id int primary key identity,
users_name varchar(max),
email varchar(max),
mobile varchar(10),
users_password varchar(max)
)

create table Sales(
id int primary key identity,
customer_id int FOREIGN KEY REFERENCES Customer(id),
customer_name varchar(max),
product_id int FOREIGN KEY REFERENCES Product(id),
product_name varchar(max),
product_price varchar(max),
sellquantity varchar(max),
selldate date
)
create table Sales(
id int primary key identity,
customer_id int,
customer_name varchar(max),
product_id int,
product_name varchar(max),
product_price varchar(max),
sellquantity varchar(max),
selldate date
)

create table Product(
id int primary key identity,
product_name varchar(max),
product_price varchar(max),
product_description varchar(max),
quantity varchar(max),
IsAvailable varchar(1),
discount int
)