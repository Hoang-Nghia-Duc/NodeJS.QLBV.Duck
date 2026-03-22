import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // Cấu hình thư mục chứa file tĩnh (CSS, JS, hình ảnh)
    app.set("view engine", "ejs"); // Cấu hình EJS làm view engine
    app.set("views", "./src/views"); // Cấu hình thư mục chứa các file view
}

module.exports = configViewEngine