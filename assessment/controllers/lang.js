const Lang = require("../models/Lang");

exports.list = async (req, res) => {
    try {
        var selectedDate = "September 2020";
        console.log(selectedDate)
        const langs = await Lang.find({Date: selectedDate});
        res.render("langs", {langs: langs});
    } catch(e) {
        res.status(404).send({message: "couldn't find Langs" + e});
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try{
        await Langs.findByIdAndRemove(id);
        res.redirect("/langs");
    } catch(e){
        res.status(404).send({message: "Could not delete record" + $id});
    }
};