// Exemple adapté de la mise en route d'Express : 
// http://expressjs.com/fr/starter/hello-world.html
const mysql = require('mysql')
var express = require('express');
var app = express();
const bodyparser = require('body-parser')
const iniparser = require('iniparser')


let configDB = iniparser.parseSync('./DB.ini')
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
let mysqlconnexion = mysql.createConnection({
 host:configDB['dev']['host'],
 user:configDB['dev']['user'],
 password:configDB['dev']['password'],
 database:configDB['dev']['database']
})
mysqlconnexion.connect((err) => {
 if (!err) console.log('BDD connectée.')
 else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})

// '/' est la route racine
app.get('/', function (req, res) {
  res.send('Bonjour !');
});

app.listen(3000, function () {
  console.log("Application d'exemple écoutant sur le port 3000 !");
});