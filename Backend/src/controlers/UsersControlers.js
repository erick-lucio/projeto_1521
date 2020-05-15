const Users = require('../models/Users');

module.exports={

    async createUser(req,res){
        const {name,email}=req.body;

        const user = await Users.create({name,email});

        return res.json(user);
    }
    
}