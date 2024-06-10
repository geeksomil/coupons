const { default: mongoose } = require("mongoose");
const couponSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    limitExist:{
        required:true,
        type:Boolean
    }, 
    limit:{
        type:Number,
        required:function() { return this.limitExist; }
    }
    ,
    discount:{
        type:Number,
        required:true
    },
    discountType:{
        type:String,
        enum:['percentage','discrete'],
        required:true
    }
})
const couponModel=new mongoose.model("coupons",couponSchema)
module.exports=couponModel
/*
{
    "name":"OFF40",
    "isLimit":true
    "limit":3,
    "discount":30,
    "discountType":"percentage"
}
*/