const express = require('express')
const connection = require('./db')
const connection2 = require('./db')
//const bodyParser = require('body-parser')
//const app = express()
const router = express.Router()


const defaultroute = router.get('/',(req,res,next)=>{
    let queryString = '';

    res.status(200).send(queryString)
});

const returnAllUsers = router.get('/alluser',(req,res)=>{
    let queryString = 'select * from users';
    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
});
//const createUser = router.post('/cruser/:Name/:Password/:Email',(req,res)=>{
const createUser = router.post('/cruser/',(req,res)=>{  
    let name = req.body.valueName;
    let password = req.body.valuePassword;
    let email = req.body.valueEmail;   
    
    let queryStringSelect = 'select name_user from users where password_user = "'+password+'" || email = "'+email+'"';
    connection2.query(queryStringSelect,(err1,rows1,fields1)=>{
        if(!err1){
           if(rows1[0] == null){
               //console.log(rows1[0].name_user[0]);
                let queryString ='insert into users (name_user,password_user,email,permissionLvl)values("'+name+'","'+password+'","'+email+'",0)';
                connection.query(queryString,(err,rows,fields)=>{
                    if(!err){
                        console.log("criou");
                        res.status(200).send("1")
                    }else{
                        console.log(err)
                    }
            
                })
           }else{
               console.log("Usuario ja existente");
               res.status(200).send("0");
           } 
        }else{
            console.log(err1);
        }
    })

});
const searchUser = router.post('/sruser/',(req,res)=>{  

    
    let password = req.body.valuePassword;
    let email = req.body.valueEmail;   
    
    let queryString ='select name_user from users where email ="'+ email +'" && password_user ="'+ password+'"';
    
    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            
            if(rows[0] != null){
               // console.log("tem merda");//rows.name_user
                //console.log(rows[0].name_user);
                res.status(200).send({data:1,user:rows[0].name_user});
            }else{
                res.status(200).send({data:0,user:'user_not_found'});
                //console.log("vazio");
            }
            
                //res.status(200).send(asas);
                //res.status(200).send("Sucess");
            
            
            //console.log(rows);
        }else{
            console.log(err)
            //console.log(rows);

        }

    })
});

const searchLast50Chatlogs = router.get('/sr100chats',(req,res)=>{
    
    
    let queryString ='select a.messages,b.name_user,date_format(a.time_msg,"%d/%m/%Y-%H:%i")as date_time from chat as a join users as b on a.user_id=b.user_id order by time_msg desc limit 100';

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
           // console.log(rows);
        }else{
            console.log(err)
        }
    })


});
const insertMessage = router.post('/inschat',(req,res)=>{

 
    let queryString = 'insert into chat(messages,time_msg,user_id)values("'+req.body.message+'",now(),(select a.user_id from users as a where name_user = "'+req.body.name +'"))';
    console.log(req.body);
    
    
    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send("1")
        }else{
            console.log(err)
        }
   })
})


module.exports = defaultroute,returnAllUsers,createUser,insertMessage,searchUser,searchLast50Chatlogs;
