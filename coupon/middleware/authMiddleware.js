const jwt=require("jsonwebtoken")
const authMiddleware=(req,res,next)=>{const token=req.body.token;
let payload;
jwt.verify(token, process.env.tokenSecret, (err, decoded) => {
    if (err) {
        // Token verification failed
        console.error('Token verification failed:', err.message);
        return res.send({success:false,msg:"invalid user"});
    } else {
        // Token verification successful
        payload=decoded;
        req.body.payload=payload;
        next();
    }
})}
module.exports=authMiddleware