const { hasUncaughtExceptionCaptureCallback } = require("process");
const Date = require("../models/Date.js");

exports.list = async (req, res) => {
    try{
        const Dates = await Date.find({});
        res.render("Dates", {Dates: Dates});
    } catch(e){
        res.status(404).send({message: "couldn't find Dates"});
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try{
        await Date.findByIdAndRemove(id);
        res.redirect("/dates");
    } catch(e){
        res.status(404).send({
            message: "Could not delete record" + $id
        });
    }
};