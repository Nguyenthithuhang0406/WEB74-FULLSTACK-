1/Database là gì?
-Hệ quản trị cơ sở dữ liệu làm các nhiệm vụ tổ chức, đọc, ghi và liên kết dữ liệu một cách hiệu quả.

Hệ quản trị cơ sở dữ liệu quan hệ truyền thống
-có dạng bảng
-ưu điểm:
+tính chính xác và toàn vẹn cao
+dữ liệu có tính nhất quán khi thay đổi hoặc xoá
-Nhược điểm:
+khả năng mở rộng bị hạn chế
+tốc độ chậm hơn do các mối quan hệ giữa các bảng với nhau


2/MongoDB và NoSQL
-MongoDB là một hệ quản trị cơ sở dữ liệu dạng "document' thay vì dạng bảng, là một dạng NoSQL database. 
-Đặc điểm:
+chủ động loại bỏ các quan hệ giữa các bảng
+tăng tốc độ đọc/ghi dữ liệu
+Có thể lưu trữ dữ liệu không có cấu trúc định sẵn

-một document ở trong MongoDB là một object của js, dễ dàng thêm/bớt các trường dữ liệu, không bắt buộc các trường dữ liệu của tất cả các document trong một collection đều cần phải có trường dữ liệu giống nhau.

-Ưu điểm MongoDB
+cấu trúc mềm dẻo, phù hợp với ứng dụng có sự thay đổi nhiều về dữ liệu
+không có các câu lệnh join và ràng buộc phức tạp giữa các collection. Tăng tốc quá trình truy xuất và cập nhật dữ liệu
+dễ dàng mở rộng theo nhiều cách
+API đơn giản và tương đồng với js

3/các câu lệnh cơ bản

+use<db_name> : chuyển sang các database khác nhau. database sẽ được tạo nếu chưa tồn tại
+db.<collection_name>.insertOne: thêm một document vào trong collection
+db.<collection_name>.find : truy vấn dữ liệu bên tron collection
+db.<collection_name>.updateOne : cập nhật document ben trong collection
+db.<collection_name>.deleteOne : xoá document bên trong collection


*sd driver NodeJS để kết nối từ ứng dụng express
-npm install mongodb