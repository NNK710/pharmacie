//Importation 
const { urlencoded } = require('express');
const express = require('express');
var urlencodedParser = express.urlencoded({ extended: false })
//Importation du fichier controller
const SauteuhzController = require('../controllers/SauteuhzController');
//création du routeur Express pour ce module
const routeur = express.Router();


//Définition des routes et des fonctions associées
routeur.get('/', SauteuhzController.Sauteuhz_accueil);

routeur.get('/testchart', SauteuhzController.Chart_affichage);

routeur.get('/listeClients/', SauteuhzController.Clients_affichage);

routeur.get('/detailClient/:nom/:prenom', SauteuhzController.Clients_detail);
 
routeur.get('/listeMedocs/', SauteuhzController.Medocs_affichage);

routeur.get('/detailMedoc/', SauteuhzController.Medocs_detail);

routeur.get('/paneladmin/', SauteuhzController.Admin_affichage);
routeur.get('/stockadmin', SauteuhzController.Medocs_update_stock);
//routeur.get('*', 404);


//Exportation du module routeur
module.exports = routeur 