function sessionCookieMiddleware(req, res, next){
    const {user} = req.session;
    if(!user){
        return res.status(400).json("cookie mustbe...");
    }
    if(user.username !== process.env.USERNAME){
        return res.status(403);
    }
    next();
}

module.exports = sessionCookieMiddleware;