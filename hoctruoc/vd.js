const express = require('express')
const app = express()
const port = 3000;

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})

app.get('/home', (req, res) => {
    console.log('Home')
    res.send('Hello, world!')
})
//.get(): khai báo một đường dẫn bên trong expressJS

//(req, res) => {} : function xử lý tương ứng với đường dẫn
//+req: các thông tin được gửi lên từ phía client
//+res: gửi  response về client

//res.send(): gửi dữ liệu về phía client
//res.json(): trả dữ liệu cho client dưới dạng JSON


const students = [
    {name: "Alice", age: 10},
    {
        name: "Bob", age: 11
    },
    {
        name: "Charlie", age: 11
    },
]

app.get('/students', () => {
    res.json(students)
})

//thêm dữ liệu vào danh sách với một đường dẫn khác
app.get("/students/add", () => {
    students.push({name: "Daniel", age: 12});
    res.json(students);
})

//routing dễ quản lý hơn với express.Router()
app.get('/students', (req, res) => {...});
app.get('/students/add', (req, res) => {...});
app.get('/teachers', (req, res) => {...});
app.get('/teachers/add', (req, res) => {...});


//sd express.Router()
