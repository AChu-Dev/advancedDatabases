require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
const dateController = require("./controllers/date");
const langController = require("./controllers/lang"); 
const MongoClient = require("mongodb").MongoClient;


//setting up mongodb and mongoose using an error parse
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("error", (err) => {
    console.error(err);
    console.log("MongoDB Connection Error.");
    process.exit();
});
console.log("Mongo Connection Started Successfully: ", process.env.MONGODB_URI);

//parsing to controllers, and its queries about Lang/Date.
app.get("/dates", dateController.list);
app.get("/dates/delete/:id", dateController.delete);
app.get("/langs", langController.list);
app.get("/langs/delete/:id", langController.delete);

//setting up app.js and ejs support.
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//rendering webpages used in the site...
app.get("/", (req, res) => {
    res.render("index");
});

//Setting Up the Host and Webport:
app.listen(process.env.WEB_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.WEB_PORT}`);
});



