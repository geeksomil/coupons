const zod=require("zod");
const schema=zod.object({
    token:zod.string(),
    coupon: zod.object({
        name:zod.string().max(30),
        isLimit:zod.boolean(),
        limit:zod.coerce.number().max(1000000),
        discount:zod.coerce.number().max(1000000),
        discountType:zod.enum(['percentage','discrete']),
        limitExist:zod.boolean()
    })
})
const inputValidationMiddleware=(req,res,next)=>{
    const response=schema.safeParse(req.body);
    if(response.success){
        next();
    }
    else{
        let arr=response['error']['issues'][0]['path'];
        res.send({success:"false",msg:arr[arr.length-1]+" contains invalid type"})
    }
}
module.exports=inputValidationMiddleware