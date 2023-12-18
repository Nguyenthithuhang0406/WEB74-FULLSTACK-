session 8: backend deployment

-MongoDB với MongoDB Atlas
-tạo một organization trong mongoDB Atlas
+click "create an organization"
+điền tên organization -> chọn dịch vụ MongoDB Atlas -> chọn next
+add thêm các thành viên vào organization -> chọn "create organization"


-tạo project
+click "new project"
+điền tên project => chọn next
+chọn địa điểm server -> chọn create cluster


-cài đặt securitiy cho ứng dựng
+cung cấp username và password cho database => create User
+điền IP cho phép kết nối vào database -> để máy local có thể kết nối tới database, điền IP 0.0.0.0
+chọn "finish & close"


-connect đến MongoDB từ ứng dụng compass
+từ màn hình database deployment -> chọn connect
+chọn "connect using MongoDB Compass"
+copy đường dẫn tới Server MongoDB -> thay thế username và password
+thay thế đường dẫn trong MongoDB Compass và kết nối

-ExpressJS với HeroKu
