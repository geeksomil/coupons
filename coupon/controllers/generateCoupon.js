const couponModel = require("../db/couponModel")
module.exports = async function generateCoupon(req, res) {
    console.log(req.body)
    try {
        const coupon = new couponModel(
            req.body
        )
        await coupon.save()
        res.send({success:true,msg:"Coupon generated succesfully"})
    }
    catch {
        res.send({success:false,msg:"not generated"})
    }
}