## Hướng dẫn:

# Khi clone source từ github về với cú pháp: git clone https://github.com/thphan1408/GoStock_Next.git

- Khởi tạo cài đặt node_module: npm install && yarn install
- Chạy source dưới môi trường dev: npm run dev

# Mô tả các thành phần trong quá trình hoàn thành bài test:

    ### Ưu điểm:
    - Bố cục folder rõ ràng.
    - UI được xây dựng bởi các thư viện Tailwind UI, Flowbie, Shadcn UI.
    - Về phần đăng nhập, đăng ký và reset password được xử lý thẳng trên browser bằng local storage.
        ++ Riêng về reset password được xử lý thêm 1 bước là check email có tồn tại không:
            + Nếu email tồn tại thì sẽ đẩy vào trang reset password và cập nhật lại data trên local storage.
    - Các ô input được validate setup với các schema trong folder sr bằng thư viện Zod và định nghĩa các type.
    - Có sử dụng custom hook useViewPort để responsive layout dashboard.
    - Sử dụng song song các class của tailwindcss và shadcn UI để hoàn thành dark/light mode.

    ### Nhược điểm:
    - Chưa tối ưu về hiệu năng
    - Chưa tùy chỉnh được widget như đề tài mong muốn
    - Giao diện dashboard trên mobile/tablet chưa được tối ưu về bố cục
    - Giao diện còn khá sơ sài

# Deploy

- Source được deploy trên vercel
- Link source đã được deploy: https://gostock-next.vercel.app/
