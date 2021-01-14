const mongoose = require("mongoose");
const {Schema} = mongoose;

const overallSchema = new Schema(
    {
        "Date": String,
        "Abap": Number,
        "Ada": Number,
        "C_Sharp": Number,
        "CorCPlusPlus": Number,
        "Cobol": Number,
        "Dart": Number,
        "Delphi": Number,
        "Go": Number,
        "Groovy": Number,
        "Haskell": Number,
        "Java": Number,
        "Javascript": Number,
        "Julia": Number,
        "Kotlin": Number,
        "Lua": Number,
        "Matlab": Number,
        "Objective_C": Number,
        "Perl": Number,
        "PHP": Number,
        "Python": Number,
        "R": Number,
        "Ruby": Number,
        "Rust": Number,
        "Scala": Number,
        "Swift": Number,
        "TypeScript": Number,
        "VBA": Number,
        "Visual_Basic": Number,

    },
);
module.exports = mongoose.model("overall", overallSchema, 'dates');