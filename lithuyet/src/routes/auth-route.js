const {createUser, logIn} = require("../controllers/user_controller");

const authRoutes = require("express").Router();

authRoutes.post("/register", createUser);
authRoutes.post("/login", logIn);

module.exports = {authRoutes};