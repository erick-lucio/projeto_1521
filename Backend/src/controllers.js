const express = require('express')
const connection = require('./db')
const connection2 = require('./db')
//const bodyParser = require('body-parser')
//const app = express()
const router = express.Router()


const defaultroute = router.get('/',(req,res,next)=>{
    let queryString = '';
    queryString+='<p>/alluser <strong>Return all users</strong></p>';
    queryString+='<p>/cruser/name/password/email <strong>Create a user with pass and email</strong></p>';
    queryString+='<p>/srpddescription/description <strong>Search a product by description</strong></p>';
    queryString+='<p>/srpdid/id <strong>Search a product by id</strong></p>';
    queryString+='<p>/srpdavalible <strong>Return all avalible products</strong></p>';
    queryString+='<p>/dluser/:id <strong> Delete a specified user bi id</strong></p>';
    queryString+='<p>/aluserprm/:Id/:Permission <strong>Alter user permission by id </strong></p>';
    queryString+='<p>/alusernm/:Id/:Name <strong> Alter user name by id</strong></p>';
    queryString+='<p>/addprod/:Desc <strong>Add new Product </strong></p>';
    queryString+='<p>/addstopd/:Id/:Quantity <strong>Add product by id and quantity </strong></p>';
    queryString+='<p>/orlisdel/:Id <strong>Delete a item by id </strong></p>';
    queryString+='<p>/orlisaddim <strong>Add order to list/bank and return data to print </strong></p>';
    queryString+='<p>/orlisadd <strong>Add order to list/bank </strong></p>';
    queryString+='<p>/orlispd <strong>Search product in order list </strong></p>';
    queryString+='<p>/orlisda <strong>Search order list bi data </strong></p>';
    queryString+='<p>/orlis <strong>Return the last 100 rows of order list </strong></p>';
    queryString+='<p> <strong> </strong></p>';
    queryString+='<p> <strong> </strong></p>';
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
const deleteUser = router.post('/dluser/:Id',(req,res)=>{

    let id = req.params.Id;

    let queryString = 'delete from users where user_id = '+id;
    connection.query(queryString,(err,rows,fields)=>{   
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
});
const searchLast50Chatlogs = router.get('/sr50chats',(req,res)=>{
    
    
    let queryString ='select a.messages,b.name_user,date_format(a.time_msg,"%d/%m/%Y-%H:%i")as date_time from chat as a join users as b on a.user_id=b.user_id order by time_msg desc limit 50';

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows);
           // console.log(rows);
        }else{
            console.log(err)
        }
    })


});
const addNewProductCategory = router.post('/addprod/:Desc',(req,res)=>{

    let description = req.params.Desc;
    let queryString = 'insert into products(product_description)values("'+description+'")';
    
    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})
const addProductIntoStock = router.post('/addstopd/:Id/:Quantity',(req,res)=>{

    let quantitity = req.params.Quantity;
    let id = req.params.Id;
    let queryString = 'update stock set quantity = quantity + '+quantitity+' where product_id = '+id;

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})//////////////////////////////////////////////////////

const alterUserPermisson = router.post('/aluserprm/:Id/:Permission',(req,res)=>{

    let id = req.params.Id;
    let permission = req.params.Permission;
    let queryString = 'update users set permissionLvl = '+permission+' where user_id = '+ id;

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{

        }

    })
});

const alterUserName = router.post('/alusernm/:Id/:Name',(req,res)=>{

    let id = req.params.Id;
    let name = req.params.Name;
    let queryString = 'update users set name_user = "'+name+ '" where user_id = '+ id;

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{

        }

    })
});
const searchProductById = router.get('/srpdid/:Id',(req,res)=>{
    let id = req.params.Id;

    let queryString ='select * from products where product_id = '+id +' ';

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })

});
const searchAvalibleProducts = router.get('/srpdavalible',(req,res)=>{
    let queryString = 'select d.product_id,d.product_description,g.quantity from  products as d join stock as g  on d.product_id = g.product_id where g.quantity >0';

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{

        }
    })
});
const orderList = router.get('/orlis',(req,res)=>{
    let queryString = 'select a.ped_id,date_format(a.order_date, "%d/%m/%Y-%H:%i")as date,a.quantity,b.product_description from orders as a join products as b on a.product_id = b.product_id  ';

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})
const orderListByData = router.post('/orlisda/:Date',(req,res)=>{

    let date = req.params.Date;
    let queryString = 'select a.ped_id,date_format(a.order_date, "%d/%m/%Y-%H:%i"),a.quantity,b.product_description from orders as a join products as b on a.product_id = b.product_id  where a.order_date like "%'+date+'%"';//YYYY-MM-DD hh:mm:ss
    

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})
const orderListByProduct = router.post('/orlispd/:Product_id',(req,res)=>{

    let product_id = req.params.Product_id;
    let queryString = 'select a.ped_id,b.product_id,a.quantity,b.product_description from orders as a join products as b on a.product_id = b.product_id where b.product_id = '+product_id ;

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})
const orderListAddOrder = router.post('/orlisadd/:Quantity/:Product_id',(req,res)=>{

    let quantity = req.params.Quantity;
    let product_id = req.params.Product_id;
    let queryString = 'insert into orders(order_date,quantity,product_id)values(current_time(),'+quantity+','+product_id+')';

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})
const orderListAddOrderImprime = router.post('/orlisaddim/:Quantity/:Product_id',(req,res)=>{

    let quantity = req.params.Quantity;
    let product_id = req.params.Product_id;
    let queryStringBefore = 'insert into orders(order_date,quantity,product_id)values(current_time(),'+quantity+','+product_id+')';
    let queryString = 'select a.product_description,b.quantity from products as a join orders as b on a.product_id = b.product_id where b.ped_id = ';
    //aqui ele chama o banco 2 vez na primira ele insere na order e na segunda ele seleciona usando o id inserido e retorna para o front end os dados a serem impressos na nota
    connection.query(queryStringBefore,(errBefore,rowsBefore,fieldsBefore)=>{
        if(!errBefore){
            queryString += rowsBefore.insertId ;
            //res.status(200).send(rows)
            connection.query(queryString,(err,rows,fields)=>{
                if(!err){
                    res.status(200).send(rows);
                }else{
                   console.log(err) 
                }
            })
            //console.log(rowsBefore.insertId);
        }else{
            console.log(errBefore)
        }
    })
})
const orderListDel = router.post('/orlisdel/:Id',(req,res)=>{

    let id = req.params.Id;
    let queryString = 'delete from orders where ped_id = '+ id;

    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            res.status(200).send(rows)
        }else{
            console.log(err)
        }
    })
})

module.exports = defaultroute,searchProductById,returnAllUsers,createUser,searchAvalibleProducts,deleteUser,alterUserName,alterUserPermisson,
addNewProductCategory,addProductIntoStock,orderList,orderListDel,orderListAddOrderImprime,orderListAddOrder,orderListByProduct,orderListByData,searchUser,searchLast50Chatlogs;
