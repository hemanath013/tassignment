create database onlineBookStore;
use onlineBookStore;

create table author(
URL varchar(50) unique,
author_name varchar(20),
address varchar(50) ,
primary key(author_name,address)
);

create table publisher(
publisher_name varchar(20) primary key,
address varchar(50),
phone integer,
URL varchar(50)
);

create table product(
product_id varchar(10) primary key,
title varchar(20),
year int,
type varchar(20),
count int,
author_name varchar(20),
address varchar(50) ,
publisher_name varchar(20),
foreign key(publisher_name) references publisher(publisher_name) ,
foreign key(author_name,address) references author(author_name,address)
);

create table warehouse(
code varchar(10) primary key,
address varchar(50),
phone integer,
product_id varchar(10),
foreign key(product_id) references product(product_id)
);

create table customer(
email varchar(50) primary key,
name varchar(20),
address varchar(50),
phone integer
);

create table shopping_basket(
basket_id varchar(10) primary key,
email varchar(50),
product_id varchar(10),
foreign key(product_id) references product(product_id),
foreign key(email) references customer(email)
);

create table purchased_products(
product_id varchar(10),
basket_id varchar(10),
count int,
primary key(product_id,basket_id)
);

create table products_in_warehouse(
code int,
product_id varchar(10),
count int,
primary key(product_id,code)
);