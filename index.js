// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
var express = require('express');
const bodyparser = require('body-parser')
const iniparser = require('iniparser')
const Routeur = require('./routes/SauteuhzRoute')


let configDB = iniparser.parseSync('./DB.ini')
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use('/', Routeur);


// '/' est la route racine
app.get('/', function (req, res) {
  res.render("./index");
});


app.listen(3000, function () {
  console.log("Application d'exemple écoutant sur le port 3000 !");
});