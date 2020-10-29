const mongoose = require("mongoose");
const {Schema} = mongoose;

const langSchema = new Schema(
    {
        Date: String,
    },
    { timestamps: true }
);


module.exports = mongoose.model("Lang", langSchema);