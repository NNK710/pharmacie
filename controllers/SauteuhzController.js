const iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')
const mysql = require('mysql')

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



const Sauteuhz_accueil = (req, res) => {
        res.render("./index");
}


const Clients_affichage = (req, res) => {
  
        mysqlconnexion.query('SELECT * FROM client', (err, lignes, champs) => {
        if (!err) {
        console.log(lignes)
        res.render("./listeClients", {index : lignes})
        }
        })
}

const Clients_detail = (req, res) => {

        mysqlconnexion.query('SELECT * FROM client', (err, lignes, champs) => {
        if (!err) {
        console.log(lignes)
        res.render("./detailClients", {index : lignes})
        }
        })
}

const Medocs_affichage = (req, res) => {
        mysqlconnexion.query('SELECT * FROM medicament', (err, lignes, champs) => {
        if (!err) {
        console.log(lignes)
        res.render("./listeMedocs", {index : lignes})
        }
        })
}

const Medocs_detail = (req, res) => {
        mysqlconnexion.query('SELECT * FROM client', (err, lignes, champs) => {
        if (!err) {
        console.log(lignes)
        res.render("./detailMedocs", {index : lignes})
        }
        })
}


module.exports = {
    Sauteuhz_accueil,
    Clients_affichage,
    Clients_detail,
    Medocs_affichage,
    Medocs_detail
}