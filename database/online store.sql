create database onlinestore;
use onlinestore;
create table author(
a_name varchar(30),
a_address varchar(300),
a_url varchar(2048),
PRIMARY KEY(a_name,a_address));

create table publisher(
p_name varchar(30) primary key,
p_address varchar(300),
p_phone char(10),
p_url varchar(2048));

create table book(Title varchar(50),
ISBN varchar(20) primary key,
price float,
b_year year,
author_name varchar(30),
publisher_name varchar(30),
foreign key (author_name) references author(a_name),
foreign key (publisher_name) references publisher (p_name));


create table customer(
c_name varchar(50),
c_address varchar(300),
c_email varchar(100) primary key,
c_phone char(10));

create table shopping_basket(
basket_id int primary key,
c_email varchar(300),
ISBN varchar(20),
foreign key (c_email) references customer(c_email),
foreign key (ISBN) references book(ISBN));

create table warehouse(
w_code int primary key,
w_address varchar(300),
w_phone char(10));

create table stocks(
ISBN varchar(20),
w_code int,
no_of_copies int,
foreign key (ISBN) references book(ISBN),
foreign key (w_code) references warehouse(w_code),
primary key(ISBN,w_code));


create table manufacturing_company(
company_name1 varchar(15),
address varchar(30),
phone int,
email varchar(30) primary key
);

create table dealer(
name1 varchar(15),
address varchar(30),
phone int,
email varchar(30),
id int primary key,
foreign key(email) references manufacturing_company(email)
);
create table compact_disk(
name1 varchar(15),
price int,
id int,
foreign key(id) references dealer(id)
);
create table music_cassettees(
name1 varchar(15),
price int,
id int,
foreign key(id) references dealer(id)
);