const express = require("express");
const connect = require("./db/connection");
const applyCoupon = require("./controllers/applyCoupon");
const generateCoupon = require("./controllers/generateCoupon");
const addUser = require("./controllers/addUser");
const app = express();
const router = express.Router();
let connected = false;
app.use(router)
router.use(express.json());
router.use(async (req, res, next) => {
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
})
router.post("/addUser",addUser);
router.post('/generateCoupon', generateCoupon);
router.post("/applyCoupon",applyCoupon)
app.listen(process.env.PORT || 7000);
