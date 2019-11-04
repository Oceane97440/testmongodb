//Connetion bdd mongoclient
var MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var CONNECTION_URL = "mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority";
var DATABASE_NAME = "calculatrice";
var controller = {};
var database, collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("calc");
    console.log("Connected to `" + DATABASE_NAME + "`!");
});

//Controllers

controller.list = (req, res) => {
    //récupère les résultats
    collection.find().toArray(function(err, calculs){

    console.log(calculs)
        res.render('calc.ejs',{calculs:calculs});
    });
   

};

// controller.techno = (req, res) => {
//     //récupère les résultats
//     res.render('techno.ejs');
// };


//ajout save
controller.save = (req, res) => {
    res.send('save');
}


//ajout save
controller.calcul = (req, res) => {
    collection.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });

}
//ajout save
controller.calcul = (req, res) => {
    collection.findOne({ "_id": new ObjectId(req.params.id) }, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });

}









//Important pour export
module.exports = controller;
