const express = require('express')

const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');




const defaultRoute = require('./src/controllers')


app.use(bodyParser.json());
app.use(cors());

app.listen(3100, () => {
    console.log('Server Running')
});

app.use('/',defaultRoute);


//app.use('/alluser',returnAllUsers);//working
//app.use('/cruser',createUser);//working
//app.use('/dluser',deleteUser);//working
//app.use('/chuserper',alterUserPermisson);//working

//app.use('/srpdid',searchProductById);//working
//app.use('/addprod',addNewProductCategory);//working
//app.use('/srpddescription',searchProductByDescription);//working
//app.use('/srpdavalible',searchAvalibleProducts);working
//app.use('/addstopd',addProductIntoStock);//working

//app.use('/orlis',orderList);//working
//app.use('/orlisda',orderListByData);//working
//app.use('/orlispd',orderListByProduct);//working
//app.use('/orlisadd',orderListAddOrder);//working
//app.use('/orlisaddim',orderListAddOrderImprime);//working mais ainda falta retorna mais dados como nome do cliente e usuario que o atendeu
//app.use('/orlisdel',orderListDel);//working
//app.use



