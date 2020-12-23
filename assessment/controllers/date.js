const Date = require("../models/Date");

exports.list = async (req, res) => {
    try {
        const dates = await Date.find({});
        res.render("dates", {dates: dates},);
    } catch(e) {
        res.status(404).send({message: "could not list dates"});
        console.log(e);
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Date.findByIdAndRemove(id);
        res.redirect("/dates");
    } catch(e) {
        res.status(404).send({
            message: "Could not delete record" + $id
        });
    }
};

