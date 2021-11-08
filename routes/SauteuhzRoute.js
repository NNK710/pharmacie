// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const SauteuhzController = require('../controllers/SauteuhzController');

routeur.get('/', SauteuhzController.Sauteuhz_accueil);

routeur.get('/listeClients/', SauteuhzController.Clients_affichage);

routeur.get('/detailClients/', SauteuhzController.Clients_detail);
 
routeur.get('/listeMedocs', SauteuhzController.Medocs_affichage);

routeur.get('/detailMedocs', SauteuhzController.Medocs_detail);

module.exports = routeur 