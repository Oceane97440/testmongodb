var controller = {};

//Controllers

controller.index = (req, res) => {
    //récupère les résultats
    
        res.render('techno.ejs');

        

};



//Important pour export
module.exports = controller;
