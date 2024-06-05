const mongoose=require("mongoose")
const dotenv=require("dotenv");
dotenv.config();
const uri=process.env.uri
async function connect(){
    await mongoose.connect(uri)
}
module.exports= connect