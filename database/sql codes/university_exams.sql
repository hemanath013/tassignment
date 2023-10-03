create database uni_exams;
use uni_exams;

create table sub_ject(
sub_name varbinary(30),
sub_code varchar(15) primary key
);
create table course(
c_name varchar(30),
c_number int primary key,
department varchar(30),
sub_code varchar(30),
foreign key (sub_code) references sub_ject(sub_code)
);

create table section(
s_name varchar(30),
s_number int primary key,
enrollment int,
c_number int,
student_id varchar(15),
foreign key(c_number) references course(c_number),
foreign key(student_id) references student(student_id)
);

create table student(
student_name varchar(30),
student_id varchar(15) primary key,
c_number int,
foreign key(c_number) references course(c_number)
);

create table exam(
date_ date,
time_ time,
c_number int,
s_number int,
room_number int,
sub_code varchar(15),
foreign key(c_number) references course(c_number),
foreign key(sub_code) references sub_ject(sub_code),
foreign key(room_number) references room(room_number),
foreign key(s_number) references section(s_number)
);

create table room(
room_number int primary key,
building varchar(15),
capacity int
);







