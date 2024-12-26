create database UserDB;
Use UserDB;
create atble Users(
    Id int auto_increment primary key,
    Name varchar(200),
    Address varchar(200),
    State varchar(200),
    District varchar(200),
    DateOfBirth Date,
    Language varchar(48),

);