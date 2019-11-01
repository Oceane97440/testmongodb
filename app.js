const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "calculatrice";

var app = Express();

app.set('views', __dirname + '/views');
app.set('views engine','ejs');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
    
});

const calculatrice = require('./routes/index');

app.use('/', calculatrice)


// app.get("/calculatrice/:id", (request, response) => {
//     collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });
// app.get("/", (request, response) => {

//         response.render('calc.ejs');

// });
// app.post ('/', (req, res) => {
//     res.render('/add', {titre: 'Calculatrice'})
//   });
