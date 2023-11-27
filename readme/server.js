//Log API
//ghi lại thời gian request đó được gửi tới
const express = require('express');
const app = express();

app.get("/teacher", (req, res) => {
    cccc
})
app.get("/student", (req, res) => {
    console.log("new req at", new Date()); ///bị lặp lại nhiều lần
})

app.listen(3000, () => {
    if(!err){
        console.log("app is running at 3000");
    }
})

//Authentication
//kiểm tra xem request đó có đính kèm API hay không trước khi gửi dữ liệu về phía client

app.get('/student', (req, res) => {
    const api_key = req.query.api_key;
    if(api_key){
        res.json(students);
    }else{
    res.send("API key is mising");
    }
})

//trích xuất logic thành một function
const reqLog = () => {
    console.log("new req at ", new Date());
}

const requireAPIKey = (query) => {
    if(!query.api_key){
        throw new Error("API key is missing");
    }
}

app.get("/student", (req, res) => {
    reqLog();
    requireAPIKey(req.query);
    res.json(students);
})

app.get("/teacher", (req, res) => {
    reqLog();
    res.json(students);
}
)

///Nhiều handlers trên một API Endpoint
//cú pháp tạo ra 1 API Endpoint

app.get("/student", (req, res) => {
     //this is a handler
})

//định nghĩa nhiều hơn một handler cho một đường dẫn

app.get("/student", (req, res, next) => {
    res.json(students);
},(req, res, next) => {
    console.log("next student");
})

//thực tế, trong một handler , chúng ta có thể có 3 tham số đầu vào như sau:
//+req: object chứa thông tin liên quan đến request
//+res: object chứa thông tin liên quan đến response
//+next: một function, khi được gọi nó sẽ thực hiện handler tiếp theo


//student
app.get("/student", (req, res, next) => {
    console.log("students API");
    next();
}, (req, res, next) => {
    res.json(students);
})

//teacher
app.get("/teacher", (req, res, next) => {
    console.log("teacher API");
    next();
},(req, res, next) => {
    console.log("teacher API 2");
    next();
})

app.get("/teacher", (req, res) => {
    res.json(teachers);
})


//mỗi một handler trong mắt xích chính là một middleware, Middleware trong expressJS có những nhiệm vụ sau:
//+chạy bất cứ đoạn code nào
//+thay đổi giá trị bên trong object req và res
//+kết thúc chu trình request-response sớm, không cho phép middleware tiếp theo xử lý
//+gọi tới middleware tiếp theo

//mặc dù chúng ta có thể có một danh sách middleware cho một đường dẫn, chúng ta chỉ có thể trả về response với res.json() hoặc res.send() một lần duy nhất cho một request. vì lúc này chu trình request-response đã kết thúc



///sử dụng middlware
//tách phần log thành một middlware riêng và tái sử dụng chúng

const logMdw = (req, res, next) => {
    console.log("new req at", new Date());
    next();
}

app.get("/student", logMdw, (req, res) => {
    res.json(students);
})

app.get("/teachers", logMdw, (req, res) => {
    res.json(teachers);
})


//áp dụng middleware với router hoặc app

//router level
const studentRouter = express.Router();

studentRouter.use(logMdw);

studentRouter.get("/", (req, res) => {console.log("hi")});
studentRouter.post("/", (req, res) => {console.log("ha")});
studentRouter.post("/:id", (req, res) => {console.log("he")});

app.use('/students', studentRouter);

//app level
app.use(logMdw);


//kết thúc chu trình request-response sớm hơn
//kiểm tra sự tồn tại của API key
const requireApiKey = (req, res, next) => {
    if(!req.query.api_key){
        res.send("api key is mising");
        return;
    }
    next();
}


//chỉnh sửa object req với middleware
const requireApikey = (req, res, next) => {
    if(req.query.api_key){
        req.hasApiKey = true;
    }
    next();
}

studentRouter.use(requireApikey);

studentRouter.get("/student", (req, res) => {
    if(req.hasApiKey){
        res.json(students);
    }else{
        res.json(students.filter(s => {
            return !s.private;
        }))
    }
})


///nâng cao: middleware tuỳ chỉnh
//tạo ra 1 function trả về 1 middleware để tạo ra 1 middleware tuỳ chỉnh khi sử dụng
const logMdwFactory = (options) => {
    return (req, res, next) => {
        let message = "new req at " + new DateTime();
        if(options.withApiKeyInfo){
            if(req.query.api_key){
                message += "-api key: " + req.query.api_key;
            }else{
                message += "-No api key attached";
            }
        }
        console.log(message);
        next();
    }
}

//all student endpoint ưill have info about api key
studentRouter.use(logMdwFactory({withApiKeyInfo : true}));

//all student endpoint ưill not have info about api key
teacherRouter.use(logMdwFactory({withApiKeyInfo : false}));


//middleware xử lý lỗi
//cú pháp
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("something broke!");
})