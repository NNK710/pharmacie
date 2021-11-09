const mysql = require('mysql')
const iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')

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

module.exports = mysqlconnexion;
