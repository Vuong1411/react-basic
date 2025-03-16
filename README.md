# Hướng dẫn Tạo Dự Án React

1. **Cài đặt Node.js** (Nếu chưa cài đặt):
   - Tải và cài đặt Node.js từ [Node.js](https://nodejs.org).
   - Kiểm tra bằng lệnh:
     ```bash
     node -v
     ```
   - Nếu thấy phiên bản Node, nghĩa là đã cài đặt thành công.

2. **Tạo dự án React**  
   - Mở Terminal (hoặc Git Bash) trong Visual Studio Code.
   - Chạy lệnh:
     ```bash
     npx create-react-app my-react-app
     ```
   - Lệnh này sẽ cài đặt các gói cần thiết và tạo cấu trúc cho dự án React.

3. **Di chuyển vào thư mục dự án**  
   ```bash
   cd my-react-app
   ```

4. **Khởi chạy dự án**  
   ```bash
   npm start
   ```
   - Dự án sẽ khởi chạy trên [http://localhost:3000](http://localhost:3000).

5. **Cấu trúc dự án** (tham khảo sơ lược):
   - **package.json**: Chứa thông tin dự án và danh sách dependency.
   - **src/**: Chứa tập tin nguồn React (App.js, index.js, ...).
   - **public/**: Chứa các file tĩnh (index.html, favicon, ...).
    ```plaintext
    my-react-app/
    │   package.json
    │   README.md
    │   .gitignore
    │
    ├── node_modules/
    │   ... (các thư viện cài đặt) ...
    │
    ├── public/
    │   index.html
    │   favicon.ico
    │
    └── src/
        App.js
        index.js
        ...
    ```
6. **Tạo build sẵn sàng deploy**  
   - Chạy lệnh:
     ```bash
     npm run build
     ```
   - Thư mục `build/` sẽ được tạo ra, chứa các tệp tĩnh đã được tối ưu hóa để triển khai.
# Hướng dẫn Clone dự án trên GitHub
1. **Tạo một thư mục trống** trên máy tính.
2. **Mở Terminal** (hoặc Git Bash) trong Visual Studio Code.
3. **Chạy lệnh** để clone dự án:
   ```bash
   git clone <đường dẫn repository>
   ```
4. **Di chuyển vào thư mục vừa clone**:
   ```bash
   cd <tên thư mục dự án>
   ```
5. **Cài đặt dependency** (nếu dự án dùng Node.js / React):
   ```bash
   npm install
   ```
6. **Khởi chạy dự án**:
   ```bash
   npm run dev
   ```