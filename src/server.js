import express from "express";
import bodyParser from "body-parser"; // Middleware để phân tích dữ liệu từ request body
import viewEngine from "./config/viewEngine"; // Cấu hình view engine để sử dụng EJS làm template engine
import initWebRoute from "./routes/web"; // Khởi tạo ứng dụng Express
import connectDB from "./config/connectDB"; // Kết nối đến cơ sở dữ liệu
require("dotenv").config(); // Load biến môi trường từ file .env

let app = express();

// config app
app.use(bodyParser.json()); // Middleware để phân tích dữ liệu JSON từ request body
app.use(bodyParser.urlencoded({ extended: true })); // Middleware để phân tích dữ liệu URL-encoded từ request body



viewEngine(app); // Cấu hình view engine để sử dụng EJS làm template engine
initWebRoute(app); // Khởi tạo các route cho ứng dụng

connectDB(); // Kết nối đến cơ sở dữ liệu

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});