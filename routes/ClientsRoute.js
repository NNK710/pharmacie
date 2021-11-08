// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
//const LivreControle = require('../controllers/LivreController');

// voir tous les messages
routeur.get('/', LivreControle.livreOr_affichage);

// chercher les messages contenant ElementSearch dans le champ message (query)
routeur.get('/search/', LivreControle.livreOr_recherche);


routeur.get('/formulaire/', LivreControle.livreOr_creation);
 
// voir un message choisi par ID (parameters)
routeur.get('/:id', LivreControle.livreOr_selection);

// effacer un message choisi par ID (parameters)
routeur.get('/delete/:id', LivreControle.livreOr_suppression );

// ajouter un message (query)
routeur.post('/', LivreControle.livreOr_ecriture);

module.exports = routeur 