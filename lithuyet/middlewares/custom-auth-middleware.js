function customCheckAuthMiddleware(requiredLogin){
    return function(req, res, next){
        if(requiredLogin){
            res.status(401).json("you must be login");
        }else{
            next();
        }
    };
}

module.exports = customCheckAuthMiddleware;