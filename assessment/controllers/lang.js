const Lang = require("../models/Lang.js");

exports.list = async (req, res) => {
    try{
        const Langs = await Lang.find({});
        res.render("Langs", {Langs: Langs});
    } catch(e){
        res.status(404).send({message: "couldn't find Langs"});
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try{
        await Langs.findByIdAndRemove(id);
        res.redirect("/Langs");
    } catch(e){
        res.status(404).send({message: "Could not delete record" + $id});
    }
};