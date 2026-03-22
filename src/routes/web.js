import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoute = (app) => {
    router.get("/", homeController.getHomePage);

    router.get("/duck", (req, res) => {
        return res.send("hello world Duck");
    });
    return app.use("/", router); // Sử dụng router cho tất cả các route bắt đầu bằng "/"
}

module.exports = initWebRoute;