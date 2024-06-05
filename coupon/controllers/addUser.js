const { default: mongoose } = require("mongoose");
const userModel = require("../db/userModel");
module.exports = async function addUser(req, res) {
    try {
        const user = new userModel({ ...req.body, coupons: [] });
        await user.save();
        res.send({success:true,msg:"user created successfully"})
    }
    catch(err) {
        console.log(err)
        res.send({success:false,msg:"user not created"})
    }
}