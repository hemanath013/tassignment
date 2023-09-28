create database U_R_O;
use U_R_O;
create table student(
Stu_id char(7) primary key,
Stu_name varchar(30),
stu_program varchar(20));

create table courses(
course_id char(5) primary key,
course_title varchar(30),
credit int,
syllabus text,
prerequisites text);

create table course_offering(
course_id char(5),
c_year year,
semester int,
section_number int,
instructor varchar(30),
timing time,
classroom varchar(5),
FOREIGN KEY(course_id) REFERENCES courses(course_id));

create table instructor(ins_id char(5) primary key,
ins_name varchar(30),
ins_dept varchar(10),
ins_title varchar(20));

create table enrollment(enroll_id int auto_increment primary key,
course_id char(5),
student_id char(7),
FOREIGN KEY(course_id) REFERENCES courses(course_id),
FOREIGN KEY(student_id) REFERENCES student(stu_id));

