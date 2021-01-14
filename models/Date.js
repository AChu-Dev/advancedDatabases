const mongoose = require("mongoose");
const {Schema} = mongoose;

const dateSchema = new Schema(
    {
        "Date": String 
    },
);

//console.log(dateSchema);
module.exports = mongoose.model("Date", dateSchema, 'dates');