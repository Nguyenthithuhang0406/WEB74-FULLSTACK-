function defaultPageMiddleware(req, res, next){
    const {take, page} = req.query;

    if(!take){
        req.query.take = "2";
    }
    if(!page){
        req.query.page = "1";
    }
    next();
}

module.exports = defaultPageMiddleware;