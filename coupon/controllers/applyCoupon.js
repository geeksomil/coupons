const { default: mongoose } = require("mongoose")
const userModel = require("../db/models/userModel")
const couponModel = require("../db/models/couponModel")
const jwt=require("jsonwebtoken")
module.exports = async function applyCoupon(req, res) {
    try {
        const payload=req.body.payload;
        let userPromise = userModel.findOne({ "username": payload.username });
        let couponPromise = couponModel.findOne({ "name": req.body.coupon });
        let user, coupon;
        await Promise.all([userPromise, couponPromise]).then((response) => {
            user = response[0];
            coupon = response[1];
        });
        if (!user) {
            return res.send({success:false,msg:"username does not exist",price:req.price});
        }
        if (!coupon) {
            return res.send({success:false,msg:"coupon does not exist",price:req.price})
        }
        const userCoupons = user.coupons;
        let cnt = 0;
        if(coupon.limitExist){
        if (userCoupons.length != 0) cnt = userCoupons.reduce((cnt, ele) => ele === req.body.coupon ? cnt + 1 : cnt, 0);
        if (cnt >= coupon.limit) {
            return res.send({success:false,msg:"coupon maximum limit reached",price:req.price});
        }
        }
        let msg = await userModel.updateOne({ "username": payload.username }, { $push: { "coupons": req.body.coupon } })
        let price=req.body.price;
        if(coupon.discountType=='percentage'){
            price=price*(100-coupon.discount)/100;
        }
        else{
            price=price-coupon.discount;
        }
        return res.send({success:true,msg:"coupon redeemed succesfully",price:Math.max(price,0)});
    }
    catch (err) {
        console.log(err)
        return res.send({success:false,msg:"error"});
    }
}