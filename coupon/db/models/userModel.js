const { default: mongoose } = require("mongoose");
const userSchema={
    username:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
    },
    coupons:Array,
    isAdmin:{
        type:Boolean,
        required:true
    }
}
const userModel=new mongoose.model("users",userSchema);
module.exports=userModel