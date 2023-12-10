const { Error } = require("mongoose");

class AppErr extends Error{
    constructor(msg, statusCode){
        super(msg);
        this.statusCode = statusCode ;
    }
}
module.exports = {AppErr};