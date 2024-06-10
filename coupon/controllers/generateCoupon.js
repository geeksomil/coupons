const couponModel = require("../db/models/couponModel")
const jwt=require("jsonwebtoken")
module.exports = async function generateCoupon(req, res) {
    try {
        const payload=req.body.payload;
        if(!payload.isAdmin){
            return res.send({success:false,msg:"not authorised"});
        }
        const coupon = new couponModel(
            req.body.coupon
        )
        await coupon.save()
        res.send({success:true,msg:"Coupon generated succesfully"})
    }
    catch (err){
        console.log(err)
        res.send({success:false,msg:"not generated"})
    }
}
/*
{
    "name":"OFF50",
    "limitExist":true,
    "limit":3,
    "discount":50,
    "discountType":"percentage"
}
*/