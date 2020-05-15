create database server_node_erick_mysql
use  server_node_erick_mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
flush privileges
SET FOREIGN_KEY_CHECKS=0;
select * from users 
select * from chat 
delete from chat where messages = ""

create table users(
user_id int auto_increment primary key not null,
password_user varchar(80) not null,
name_user varchar(100)not null,
email varchar(50)not null,
permissionLvl int not null


)
create table chat (
id int auto_increment primary key not null,
messages varchar(255) not null,
user_id int not null,
foreign key (user_id) REFERENCES users(user_id),
time_msg datetime,
dest int,
remetente int
)

select now()
for 
insert into chat (messages,user_id,time_msg)values('f',60,now())
select a.messages,b.name_user,date_format(a.time_msg,"%d/%m/%Y-%H:%i")as
 date_time from chat as a join users as b on a.user_id=b.user_id order by time_msg desc limit 50

DELIMITER //
CREATE FUNCTION func_cr_usersss( input_name CHAR(30),input_pass CHAR(30),input_email CHAR(30))
RETURNS INT
DETERMINISTIC
BEGIN
	insert into users (name_user,password_user,email,permissionLvl)values('input_name','input_pass','input_email',0);
     RETURN 1;
END; //
DELIMITER ;
//
DELIMITER //
CREATE FUNCTION func_sr_usersss( input_pass CHAR(30),input_email CHAR(30))
RETURNS char(50)
DETERMINISTIC
BEGIN
	declare var_return char(50);
	set var_return=0;	
	select name_user as name_user into @var_return from users where email = input_email & password_user = input_pass;
      
    
    
     RETURN  var_return ;
END; //
DELIMITER ;
//
select func_sr_usersss('fdf','kdjfkjdfk');



