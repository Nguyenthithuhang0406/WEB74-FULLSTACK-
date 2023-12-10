const { AppErr } = require("../error/AppErr");
const { createUserService, findAllService , getTotalA} = require("../services/user-service");

const createuser = async(req, res, next) => {
    try{
        const {username, password, age} = req.body;
        if(!username || !password || !age){
        throw new AppErr("username and password are require!", 400);
        }
       const newuser =  await createUserService(username, password, age);
       res.status(201).json(newuser);
    }catch(err){
        next(err);
    }
}
const findall = async(req, res, next) => {
    try{
        const {age} = req.query;
        const result = await findAllService({age});
        res.json(result);
    }catch(err){
        next(err);
    }
};

const getTotalAge = async (req, res, next) => {
    try{
        const result = await getTotalAgeService();
        res.json(result);
    }catch (err){
        next(err);
    }
};
module.exports = {createuser, findall, getTotalAge};