create database sports_team;
use sports_team;
create table player(
p_id varchar(5) PRIMARY KEY,
p_name varchar(30),
DOB date
);
create table matches(
match_id int PRIMARY KEY,
match_name varchar(50),
stadium varchar(50),
team1_score int,
team2_score int,
m_date date,
m_time time
);


create table team(
team_id int primary key,
team_name varchar(30),
t_rank int);

create table score_points(
player_id varchar(5),
match_id int,
score int,
teams_id int,
foreign key(player_id) references player(p_id),
foreign key(match_id) references matches(match_id),
foreign key(teams_id) references team(team_id)
);

create table player_performance (
player_id varchar(5),
teams_id int,
match_id int,
player_fitness boolean,
foreign key(player_id) references player(p_id),
foreign key(match_id) references matches(match_id),
foreign key(teams_id) references team(team_id)
);