//Importation de la connexion à la bdd
var db = require('../database')
//Importation du fichier models
var sauteuhzModel = require('../models/sauteuhzModel');

//Exportation des fonctions du controller
module.exports = {

        Sauteuhz_accueil : (req, res) => {
                res.render("./index");
        },

        Clients_affichage: (req, res) => {
                sauteuhzModel.Clients_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeClients", {index : lignes});
                });
        },

        Clients_detail: (req, res) =>{
                sauteuhzModel.Clients_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailClients", {index : lignes});
                });
        },

        Medocs_affichage: (req, res) =>{
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },

        Medocs_detail: (req, res) =>{
                sauteuhzModel.Medocs_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailMedocs", {index : lignes});
                });
        }

}