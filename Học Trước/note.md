Lesson 7: Common Pratise


-MVC
+Model: chứa logic tương tác với cơ sở dữ liệu: thêm, sửa , xoá, truy vấn dữ liệu
+View: API công khai bên ngoài, là cổng giao tiếp giữa client với backend
+Controller: chứa logic liên quan tới nghiệp vụ ứng dụng, đảm bảo trả ra dữ liệu đúng cho client



-Password Hashing với bcrypt
+một trong những cách có thể tạo ra mật khẩu mã hoá với ứng dụng NodeJS là sử dụng thư viện bcrypt
 cài đặt: npm install bcrypt


 -Lấy user đang đăng nhập với middleware


- Error Code
+status code của một http response có thể được phân loại như sau
+response thông tin(100-199)
+response thành công(200-299)
+response điều hướng(300-399)
+respone lỗi từ phía server(500 - 599)


+200   OK : sd cho các tác vị thành công thông thường
+201   CREATED: sử dụng cho các tác vụ thêm mới resource thành công
+400   BAD REQUEST: dử dụng để báo các lỗi đến từ người dùng
+403   FORBIDDEN: sd các lỗi lq tới quyền truy cập của người dùng với Resource
+404   NOT FOUND: sd để báo lỗi liên quan tới các resource không tìm thấy
+500   INTERNAL SERVER ERROR: lỗi bên trong  ứng dụng Express


-File upload với multer
cài đặt: npm install multer

+multer.diskStorage: cấu hình lưu trên ổ đĩa cứng
+destination: thư mục mà file upload
+filename: tên file muốn lưu trữ


-Gửi file từ postman
+tạo POST tới địa chỉ /upload của server
+Chọn đoy type là from-data
+thêm key là avatar
+Gửi