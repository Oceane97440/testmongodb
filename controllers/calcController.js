//Connetion bdd mongoclient
var MongoClient = require("mongodb").MongoClient;
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
