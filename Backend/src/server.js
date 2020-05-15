const express = require('express')

const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
require('./config/sequelize_config');



const router = require('./routes')

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(31300, () => {
    console.log('Server Running')
});

app.use('/',router);


