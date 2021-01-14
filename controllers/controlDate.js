const controlDate = require("../models/controlDate");

exports.create = async (req, res) => {
    try {
        const date = new controlDate({ Date: req.params.date, Abap: parseFloat(req.params.abap), Ada: parseFloat(req.params.ada), C_Sharp: parseFloat(req.params.c_sharp), CorCPlusPlus: parseFloat(req.params.corcplusplus), Cobol: parseFloat(req.params.cobol), Delphi: parseFloat(req.params.delphi), Go: parseFloat(req.params.go), Groovy: parseFloat(req.params.groovy), Haskell: parseFloat(req.params.haskell), Java: parseFloat(req.params.java), Javascript: parseFloat(req.params.javascript), Julia: parseFloat(req.params.julia), Kotlin: parseFloat(req.params.kotlin), Lua: parseFloat(req.params.lua), Matlab: parseFloat(req.params.matlab), Objective_C: parseFloat(req.params.obective_c), Perl: parseFloat(req.params.perl), PHP: parseFloat(req.params.php), Python: parseFloat(req.params.python), R: parseFloat(req.params.r), Ruby: parseFloat(req.params.ruby), Rust: parseFloat(req.params.rust), Scala: parseFloat(req.params.scala), Swift: parseFloat(req.params.swift), TypeScript: parseFloat(req.params.typescript), VBA: parseFloat(req.params.vba), Visual_Basic: parseFloat(req.params.visual_basic), Dart: parseFloat(req.params.dart) });
        await date.save();
        res.redirect('/dates/?message=date has been created');
    } catch (e) {
        res.status(404).send({ message: "Could not create a new date" });
        console.log(e);
    }
};

exports.list = async (req, res) => {
    try {
        //console.log(req.params.id);
        const Dates = await controlDate.find({_id: req.params.id});
        //console.log(Dates);
        res.render("controlDate", { Dates: Dates },)
    }
    catch (e) {
        res.status(404).send({ message: "could not list item"});
        console.log(e);
    }
}

exports.update = async (req, res) => {
    try {
        const date = await controlDate.findByIdAndUpdate(req.params.id, { Date: req.params.date, Abap: parseFloat(req.params.abap), Ada: parseFloat(req.params.ada), C_Sharp: parseFloat(req.params.c_sharp), CorCPlusPlus: parseFloat(req.params.corcplusplus), Cobol: parseFloat(req.params.cobol), Delphi: parseFloat(req.params.delphi), Go: parseFloat(req.params.go), Groovy: parseFloat(req.params.groovy), Haskell: parseFloat(req.params.haskell), Java: parseFloat(req.params.java), Javascript: parseFloat(req.params.javascript), Julia: parseFloat(req.params.julia), Kotlin: parseFloat(req.params.kotlin), Lua: parseFloat(req.params.lua), Matlab: parseFloat(req.params.matlab), Objective_C: parseFloat(req.params.obective_c), Perl: parseFloat(req.params.perl), PHP: parseFloat(req.params.php), Python: parseFloat(req.params.python), R: parseFloat(req.params.r), Ruby: parseFloat(req.params.ruby), Rust: parseFloat(req.params.rust), Scala: parseFloat(req.params.scala), Swift: parseFloat(req.params.swift), TypeScript: parseFloat(req.params.typescript), VBA: parseFloat(req.params.vba), Visual_Basic: parseFloat(req.params.visual_basic), Dart: parseFloat(req.params.dart) }, { new: true });
        //console.log(date)
        res.redirect("/dates/?message=date has been updated");
    }
    catch (e) {
        res.status(404).send({ message: "Could not update a new date" });
        console.log(e);
    }
}
