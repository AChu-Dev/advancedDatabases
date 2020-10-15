const express = require("express");
const path = require("path");
const app = express();
const port = 1500;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))
//app.use(express.static(__dirname, "public"));


app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "index.html"));
  res.render('index');
  //console.log('Example App outputting:'& res.sendFile(path.resolve(__dirname, "index.html")));
});

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
});

