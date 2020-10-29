//const { hasUncaughtExceptionCaptureCallback } = require("process");
const Lang = require("../models/Lang");

exports.list = async (req, res) => {
    try{
        const langs = await Lang.find({});
        res.render("langs", {langs: langs});
    } catch(e){
        res.status(404).send({message: "couldn't find langs"});
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try{
        await Lang.findByIdAndRemove(id);
        res.redirect("/langs");
    } catch(e){
        res.status(404).send({
            message: "Could not delete record" + $id
        });
    }
};