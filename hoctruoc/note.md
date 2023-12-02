Authorization là gì?
Vấn đề với Session
-Session là một trong những cách phổ biến để xác thực người dùng, đã tồn tại từ lâu
+Người dùng đăng nhập hệ thống
+ứng dụng thực kiểm tra đăng nhập là hợp lệ, ưd lưu lại thông tin người dùng. Đó là session, sau đố ưd trả lại cho người dùng session id, là định danh session vừa được tạo.
+khi người dùng truy cập vào các tài nguyên khác nhau của ưd, người dùng cần gửi thêm thông tin session id. Thông thường thông tin này gửi cùng cookie
+ưd sd session id để lấy thông tin liên quan tới người dùng đang đăng nhập. Nếu người dùng hợp lệ, tiến hành trả dữ liệu lại cho người dùng


JSON WEB TOKEN
- JWT là một tiêu chuẩn để xác thực thông tin giữa 2 bên
+người dùng đăng nhập
+nếu thông tin đăng nhập hợp lệ, ưd tiến hành ký một token với một khoá bí mật. chữ kí đó được gửi lại cho phía người dùng
+người dùng lưu trữ lại giá trị token. Nếu muốn truy cập vào các resource, người dùng gửi request có đính kèm token
+server tiến hành kiểm tra tính hợp lệ của token với khoá bí mật giống như khi tạo ra token. Nếu chữ kí hợp lệ cho phép người dùng truy cập vào ưd .


CẤU TẠO CỦA JWT
-gồm 3 phần chính:
+header: chứa thông tin liên quan tới thuật toán, loại token
+Body: chứa các thông tin muốn lưu trữ trong token
+Footer: thông tin liên quan tới chữ kí
-3 thành phần trên lưu trữ và mã hoá thành chuỗi kí tự. chúng được phân cách bởi dấu .


DỮ LIỆU BÊN TRONG MỘT JWT
+iss(Issuer) : người tạo ra token
+sub(Subject) : chủ để của token
+aud(Audience) : người nhận mà token dự định sẽ được gửi tới.
+exp(Expiration time ): thời gian token hết hạn
+nbf (not before time) : tg token bắt đầu có hiệu lực
+iat(issued at): tg token được tạo ra
+jid(JWT ID): định danh của JWT


KHOÁ BÍ MẬT VÀ CHỮ KÝ


JWT VỚI NODEJS
-cài đặt package là jsonwebtoken
npm install jsonwebtoken
