const connect = require("../db/connection");
let connected=false;
const connectionMiddleware=async (req, res, next) => {
    try {
        if (!connected) {
            await connect();
            connected = true;
            console.log("connected succesfully");
        }
        next();
    }
    catch {
           console.log("not connected ")
    }
}
module.exports=connectionMiddleware