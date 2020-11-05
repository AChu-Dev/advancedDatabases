const mongoose = require("mongoose");
const {Schema} = mongoose;

const dateSchema = new Schema(
    {
        Date: String,
    },
    { timestamps: true }
);


module.exports = mongoose.model("date", dateSchema);