//tiến hành tạo JWT với function sign
const jwt = require('jsonwebtoken');

const app = jwt();

app.post('login', (req, res) =>{
    //do login here and return user
    const user = login();
    const token = jwt.sign({username: user.username}, 'PRIVATE_KEY');
    res.json({user: user, token: token});
});

//json thường được đính kèm request từ phía client lên server bằng cách sử dụng req.headers
//kiểm tra token và giải mã nó với function verify

app.post('/students', (req, res) => {
    try{
        const token  = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, 'PRIVATE_KEY');
        if(decoded){
            res.json(students)
        }
    } catch(err){
        res.status(401).send("Invalid Token");
    }
});


//sử dụng như một express middleware và lấy thông tin người dùng cho middleware tiếp theo

const jwtMdw = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, 'PRIVATE_KEY');
        if(decoded){
            req.username = decoded.username;
            next();
        }
    }catch(err){
        res.status(401).send("Invalid Token");
    }
}
app.post('/students', jwtMdw, (req, res) => {
    console.log(req.username);
        req.json(students);

})

