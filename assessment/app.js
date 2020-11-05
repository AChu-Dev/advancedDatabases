require("dotenv").config();
const mongoose = require("mongoose");
const {WEB_PORT, MONGODB_URI} = process.env;
const express = require("express");
const path = require("path");
const app = express();

//Setting Up the Host and Webport:
app.listen(process.env.WEB_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.WEB_PORT}`);
});

//setting up mongodb and mongoose using an error parse
const MongoClient = require("mongodb").MongoClient;
mongoose.connect(MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("error", (err) => {
    console.error(err);
    console.log("MongoDB Connection Error.");
    process.exit();
});

//setting up app.js and ejs support.
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//rendering webpages used in the site...
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/dates", (req, res) => {
    res.render("dates")
});

//parsing to controllers, and its queries about Lang.
const dateController = require("./controllers/date");
app.get("/dates/get", dateController.list);
app.get("/dates/delete/:id", dateController.delete);