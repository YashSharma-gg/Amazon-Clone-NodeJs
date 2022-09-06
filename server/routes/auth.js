const express = require('express');
const User = require('../models/user');
const bcryptjs = require("bcryptjs");
const authRouter = express.Router();

// authRouter.get("/user", function(req, res){
//     res.json({"msg": "Yash"})
// });

authRouter.post("/api/signup", async(req,res)=>{

    try{
        const {name, email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({msg : 'User with same email already exists!'});
    }

    const pass =  await User.findOne({password});
    if(pass){
        return res.status(400).json({msg: 'Please enter password longer than 8 characters'})
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new User({
        email,
        password: hashedPassword,
        name,
    }) 
    user = await user.save();
    res.json(user);
    }catch(e){
        res.status(500).json({error: e.message})
    }
    // get data from client -> req.body is in the form of a dictionary or map
    
    // post that data in data base
    // return that data to user 
})

module.exports = authRouter;