require("dotenv").config();
const mongoose = require("mongoose");
const {WEB_PORT, MONGODB_URI} = process.env;
const express = require("express");
const path = require("path");
const app = express();

mongoose.connect(MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection.on("error", (err) => {
    console.error(err);
    console.log(
        "MongoDB Connection Error."
    );
    process.exit();
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/views/common/public")));
app.get("/", (req, res) => {
    res.render("index");
});

const langController = require("./controllers/lang");
app.get("/langs", langController.list);
app.get("/langs/delete/:id", langController.delete);