//Connetion bdd mongoclient
var MongoClient = require("mongodb").MongoClient;
var CONNECTION_URL = "mongodb+srv://oceane:password974@cluster0-0qsjo.mongodb.net/test?retryWrites=true&w=majority";
var DATABASE_NAME = "calc";
var controller = {};
var database, collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("calcul");
    console.log("Connected to `" + DATABASE_NAME + "`!");
});

//Controllers

controller.list = (req, res) => {
    //récupère les résultats
    collection.find().toArray(function(err, calculs){
        console.log("retrieved records:");
        console.log(calculs);
        res.send(calculs);
    });
        

};
    // res.render('calc.ejs');



//ajout save
controller.save = (req, res) => {
res.send('save');
}

//Important pour export
module.exports = controller;
