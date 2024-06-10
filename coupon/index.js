const express = require("express");
const connect = require("./db/connection");
const applyCoupon = require("./controllers/applyCoupon");
const generateCoupon = require("./controllers/generateCoupon");
const addUser = require("./controllers/addUser");
const connectionMiddleware = require("./middleware/connectionMiddleware");
const authMiddleware = require("./middleware/authMiddleware");
const app = express();
const router = express.Router();
//middlewares
app.use(router)
router.use(express.json());
router.use(connectionMiddleware)
//routes
router.post("/addUser",addUser);
router.post('/generateCoupon', authMiddleware,generateCoupon);
router.post("/applyCoupon",authMiddleware,applyCoupon)
app.listen(process.env.PORT || 7000);
