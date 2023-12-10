const { createuser, findall, getTotalAge } = require('../controllers/user-controler');

const userRoute = require("express").Router();

userRoute.post('', createuser);
userRoute.get('', findall);
userRoute.get("/total-age", getTotalAge)
module.exports = {userRoute};