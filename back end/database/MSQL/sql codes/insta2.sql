create database instagram;
use instagram;
create table users(
user_id int auto_increment primary key,
email varchar(20),
verified boolean,
phnumber varchar(10),
DOB varchar(20),
pwd text
);

create table pages(
page_id int auto_increment primary key,
user_id int,
page_name text,
page_handle text,
Bio text,
DP text,
Avatar text,
pwd text,
DOB varchar(20),
page_privacy varchar(10),
foreign key(user_id) references users(user_id)
);

create table followdetails(
followers int,
following int,
foreign key(followers) references pages(page_id),
foreign key(following) references pages(page_id)
);

create table chat(
chat_id int auto_increment primary key,
chat_type varchar(10),
vanish_mode boolean,
settings varchar(50));


create table message(
message_id int auto_increment primary key,
content varchar(200),
sender int,
Time time,
chat_id int,
isVanishMode boolean,
foreign key(chat_id) references chat(chat_id),
foreign key(sender) references pages(page_id)
);


create table chat_details(
chat_id int,
page_id int,
isAdmin boolean,
lastReadMessage_Id int,
foreign key(chat_id) references chat(chat_id),
foreign key(page_id) references pages(page_id)
);

create table device(
device_id int auto_increment primary key,
page_id int,
device_location varchar(50),
login_time time,
logout_time time,
cookie varchar(200),
foreign key(page_id) references pages(page_id)
);


create table Post(
post_id int auto_increment primary key,
page_id int,
Post_Media varchar(20),
Media_type varchar(20),
Music_Id int,
Views int8,
Primary_Poster varchar(20),
Likes int8,
Caption text,
Date_and_Time datetime,
Location varchar(25),
Music_Id_Timestamp timestamp,
foreign key(page_id) references pages(page_id)
);

create table comments(
comment_id int auto_increment primary key,
post_id int,
content varchar(100),
parent_comment_id int,
foreign key(post_id) references Post(post_id),
foreign key(parent_comment_id) references comments(comment_id)
);

create table collab_post(
post_id int,
page_id int,
foreign key(post_id) references Post(post_id),
foreign key(page_id) references pages(page_id)
);

create table likes(
page_id int,
post_id int,
comment_id int,
foreign key(post_id) references Post(post_id),
foreign key(page_id) references pages(page_id),
foreign key(comment_id) references comments(comment_id)
);

create table stories(
story_id int auto_increment primary key,
content_id int,
liked_page_id int,
foreign key(content_id) references Post(post_id),
foreign key(liked_page_id) references pages(page_id)
);

create table ref_stories(
Coordinates text, 
story_id int,
story_text text,
foreign key(story_id) references stories(story_id)
);

create table Music(
Music_id int auto_increment primary key,
post_id int,
Title varchar(100),
Artist char(40),
Lyrics char(100),
Thumbnail char(100),
foreign key(post_id) references Post(post_id));

create table Collection(
collection_id int auto_increment primary key,
collection_Name char(100),
page_id int,
foreign key(page_id) references pages(page_id)
);


create table Collab(
Collab_id int auto_increment primary key,
page_id int,
Is_Owner bool,
foreign key(page_id) references pages(page_id));

create table Saved(
post_id int,
Collab_id int,
collection_id int,
foreign key(post_id) references Post(post_id),
foreign key(Collab_id) references Collab(Collab_id),
foreign key(collection_id) references Collection(collection_id)
);


create table Media(
Media_id int auto_increment primary key,
post_id int,
Media_Link varchar(100),
foreign key(post_id) references Post(post_id)
);

create table Tags(
Tag_id int auto_increment primary key,
coords varchar(100),
Media_id int,
page_id  int,
foreign key(page_id) references pages(page_id),
foreign key(Media_id) references Media(Media_id)
);


create table Hashtags(
post_id int,
hashtag int,
hashcount int,
primary key(post_id,hashtag),
foreign key(post_id) references Post(post_id)
);