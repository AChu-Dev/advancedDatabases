require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
//const bodyParser = require("body-parser");
//const chartJS = require("chart.js");
const app = express();
const dateController = require("./controllers/date");
const langController = require("./controllers/lang"); 
const addDateController = require("./controllers/controlDate");
const updateController = require("./controllers/controlDate");
const MongoClient = require("mongodb").MongoClient;


//setting up mongodb and mongoose using an error parse
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("error", (err) => {
    console.error(err);
    console.log("MongoDB Connection Error.");
    process.exit();
});
console.log("Mongo Connection Started Successfully: ", process.env.MONGODB_URI);

//setting up app.js and ejs support.
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//For some reason uncommenting BodyParser it crashes NodeJS
//app.use(bodyParser.json);
//app.use(bodyParser.urlencoded({extended: false}));
//app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
//app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

//parsing to controllers, and its queries
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/controlDate", (req, res) => {
    res.render("controlDate");
});

app.get("/dates", dateController.list);
app.get("/dates/delete/:id", dateController.delete);
app.get("/langs/:date", langController.list);
app.get("/langs/delete/:id", langController.delete);
app.get("/controlDate/update/:id", addDateController.list);
app.get("/controlDate/add/:date/:abap/:ada/:c_sharp/:corcplusplus/:cobol/:dart/:delphi/:go/:groovy/:haskell/:java/:javascript/:julia/:kotlin/:lua/:matlab/:obective_c/:perl/:php/:python/:r/:ruby/:rust/:scala/:swift/:typescript/:vba/:visual_basic", addDateController.create);
app.get("/controlDate/update/:date/:abap/:ada/:c_sharp/:corcplusplus/:cobol/:dart/:delphi/:go/:groovy/:haskell/:java/:javascript/:julia/:kotlin/:lua/:matlab/:obective_c/:perl/:php/:python/:r/:ruby/:rust/:scala/:swift/:typescript/:vba/:visual_basic", addDateController.update);


//Setting Up the Host and Webport:
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});
