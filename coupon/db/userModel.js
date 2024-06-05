const { default: mongoose } = require("mongoose");
const userSchema={
    username:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
        unique:true
    },
    coupons:Array
}
const userModel=new mongoose.model("users",userSchema);
module.exports=userModel