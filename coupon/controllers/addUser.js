const { default: mongoose } = require("mongoose");
const jwt=require("jsonwebtoken")
const userModel = require("../db/models/userModel");
module.exports = async function addUser(req, res) {
    try {
        const accessToken=jwt.sign({username:req.body.username,isAdmin:req.body.isAdmin},process.env.tokenSecret)
        const user = new userModel({ ...req.body, coupons: [] });
        await user.save();
        res.send({success:true,msg:"user created successfully",accessToken});
    }
    catch(err) {
        console.log(err)
        res.send({success:false,msg:"user already exist"})
    }
}