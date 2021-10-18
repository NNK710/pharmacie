// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
var express = require('express');
var app = express();
app.set('view engine', 'ejs')

// '/' est la route racine
app.get('/', function (req, res) {
  res.render("./index");
});

app.listen(3000, function () {
  console.log("Application d'exemple écoutant sur le port 3000 !");
});