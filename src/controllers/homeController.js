import db from '../models/index';

let getHomePage = async (req, res) => {
    console.log(">>> getHomePage called");

    let data = await db.User.findAll();

    console.log(">>> RAW data:", data);
    console.log(">>> JSON:", JSON.stringify(data, null, 2));

    return res.render("homePage.ejs", {
        data: JSON.stringify(data)
    });
}

module.exports = {
    getHomePage: getHomePage
}