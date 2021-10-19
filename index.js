// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
const mysql = require('mysql')
var express = require('express');
const bodyparser = require('body-parser')
const iniparser = require('iniparser')

let configDB = iniparser.parseSync('./DB.ini')
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

let mysqlconnexion = mysql.createConnection({
 host:configDB['sauteuhz']['host'],
 user:configDB['sauteuhz']['user'],
 password:configDB['sauteuhz']['password'],
 database:configDB['sauteuhz']['database'],
 port:configDB['sauteuhz']['port']
})
mysqlconnexion.connect((err) => {
 if (!err) console.log('BDD connectée.')
 else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})

// '/' est la route racine
app.get('/', function (req, res) {
  res.render("./index");
});

app.get('/search', (req, res) => {
  mysqlconnexion.query('SELECT * FROM client', (err, lignes, champs) => {
  if (!err) {
  console.log(lignes)
  res.render("index", {index : lignes})
  }
  })
 })



app.listen(3000, function () {
  console.log("Application d'exemple écoutant sur le port 3000 !");
});