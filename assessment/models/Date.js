const mongoose = require("mongoose");
const {Schema} = mongoose;

const dateSchema = new Schema(
    {
        Date: String,
    },
    { timestamps: true }
);


var Date = mongoose.model("Date", dateSchema);