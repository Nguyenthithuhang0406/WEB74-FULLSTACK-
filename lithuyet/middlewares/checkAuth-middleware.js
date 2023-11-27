function checkAuthMiddleware(req, res, next){
    const {isLoggin} = req.query;

    if(!isLoggin){
        res.status(401).json({message: "you must be login first!"});
    }else{
        next();
    }
}

module.exports = checkAuthMiddleware;