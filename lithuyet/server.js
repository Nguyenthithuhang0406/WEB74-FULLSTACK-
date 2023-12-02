const express = require("express");
const app = express();
const PORT = 9999;
require("dotenv").config();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionCookieMiddleware = require("./middlewares/sessionCookie-middleware");
const jwt = require("jsonwebtoken");
const verifyJWTMiddleware = require("./middlewares/verifyJWT-middleware");

//middleware for json
app.use(express.json());
const user = {
  firstName: "Elon",
  lastName: "Musk",
  address: "VN",
};

//server json
// app.use(express.json());

//server cookie
// app.use(cookieParser());

// //session express
// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false },
//   })
// );

//route -> api/auth/login -> username, password
app.post("/api/auth/login", (req, res) => {
  //const { username, password } = req.body;

  //in correct
  if (username !== process.env.USERNAME || password !== process.env.PASSWORD) {
    return res.json("username and password are not correct");
  }
//   const inforuser = {
//     username: process.env.USERNAME,
//     role: "user",
//   };


const payload = {
    username: process.env.USERNAME,

}
  //create token and send to client
//   const token = jwt.sign(inforuser, process.env.SECRET_KEY_TOKEN);

//   res.json(token);

const token =  jwt.sign(payload,process.env.SECRET_KEY_TOKEN);
res.send(token);

  //   //create success
  //   req.session.user = {
  //     username: process.env.USERNAME,
  //   };
  //   res.json("ok");
});


//verify jwt
app.use(verifyJWTMiddleware);
//middleware for auth with session /cookie
//app.use(sessionCookieMiddleware);

//routes -> api/me GET -> "get use success"
app.get("/api/me", (req, res) => {
  //res.json("Get me success!");
  //   console.log(req.session.user);
  //   res.json(user);
});
app.listen(PORT, () => {
  console.log(`server running up in port: ${PORT}`);
});
