CRUD là gì?
+C: Create - tạo mới resource
+R: Read - lấy dữ liệu, một hoặc nhiều resource
+U: Update - cập nhật resource
+D: Delete -  xoá resource


//C- create
db.insertOne(document): nhận vào 1 object
db.insertMany([document]) : thêm vào nhiều document, tham số vào là một mảng object

//U - update
db.updateOne(condition, updater): cập nhật 1 document
db.updateMany(condition, updater): cập nhật nhiều document
+condition: điều kiện lựa chọn 1 hay nhiều document được cập nhật
+update: là 1 object xác định việc cập nhật
+trong object có thể có những toán tử (operator) như $set, $inc, $min, $max, $mul, $rename, $unset

//D-Delete
dùng deleteOne hoặc deleteMany


//R-read
dùng findOne: tìm kiếm 1 document
dùng find: tìm kiếm nhiều document, => trả về 1 mảng document => cần dùng .toArray() để nhận 1 mảng js


-Các function khác có khả năng cập nhật dữ liệu
+findOneAndUpdate
+findOneAndDelete
+findOneAndReplace


--với find có thể sử dụng các function khác
+sort() : sắp xếp, nhận vào giá trị là một object gồm các trường muốn sắp xếp: 1(tăng dần), -1(giảm dần)
+skip(): bỏ qua 1 số lượng document
+limit(): giới hạn số lượng phần tử được trả về
+project(): định nghĩa trường dữ liệu được trả về, nhận vào là 1 object các trường muốn trả về(1), hoặc không trả về(-1)



-Các query operators
-so sánh
$eq : bằng
$gt: lớn hơn
$lt: nhỏ hơn
$gte: lớn hơn hoặc bằng
$lte: nhỏ hơn hoặc bằng
$in: nằm trong
$ne: không bằng
$nin: không nằm trong

-logic
$and
$or
$not

-array
$all: document tm cần có mảng cần tìm chứa toàn bộ các phần tử này
$elemMatch: document tm ít nhất 1 phần tử thoả mãn đk

-Projection

-Aggregation
$match: điều kiện lọc
$lookup: truy vấn dữ liệu từ 1 collection khác
$group: nhóm các document lại với nhau
$unwind: làm phẳng mảng dữ liệu
$project: tương ứng với project ở trên
$sort
$kip
$limit
