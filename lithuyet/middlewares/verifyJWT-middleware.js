const jwt = require("jsonwebtoken");
require("dotenv").config();
function verifyJWTMiddleware(req, res, next) {
  const authorization = req.header.authorization;

  if (!authorization) {
    return res.status(401).json("header mustbe provide token");
  }
  // var a = "a";
  // a.split;

  const fields = authorization.split(" ");

  if (fields.length !== 2) {
    return res.status(400).json("method auth is not support");
  }
  //console.log(fields);

  const token = fields[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY_TOKEN);

    //console.log(decoded);
    if (decoded.username !== process.env.USERNAME) {
      return res.status(403);
    }
  } catch (err) {
    //console.log("err -> " , err);
    throw err;
  }

  next();
}
module.exports = verifyJWTMiddleware;
