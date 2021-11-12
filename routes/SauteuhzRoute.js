//Importation 
const express = require('express');
//Importation du fichier controller
const SauteuhzController = require('../controllers/SauteuhzController');
//création du routeur Express pour ce module
const routeur = express.Router();


//Définition des routes et des fonctions associées
routeur.get('/', SauteuhzController.Sauteuhz_accueil);

routeur.get('/testchart', SauteuhzController.Sauteuhz_testchart);

routeur.get('/listeClients/', SauteuhzController.Clients_affichage);

routeur.get('/detailClient/:nom/:prenom', SauteuhzController.Clients_detail);
 
routeur.get('/listeMedocs/', SauteuhzController.Medocs_affichage);

routeur.get('/detailMedoc/', SauteuhzController.Medocs_detail);

//Exportation du module routeur
module.exports = routeur 