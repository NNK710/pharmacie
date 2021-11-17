//Importation de la connexion à la bdd
const { urlencoded } = require('body-parser');
var db = require('../database');
const { Chart_affichage } = require('../models/sauteuhzModel');
//Importation du fichier models
var sauteuhzModel = require('../models/sauteuhzModel');

//Exportation des fonctions du controller
module.exports = {

        Sauteuhz_accueil : (req, res) => {
                res.render("./index");
        },

        // Sauteuhz_testchart : (req, res) => {
        //         res.render("./testchart");
        //  },

        Clients_affichage: (req, res) => {
                sauteuhzModel.Clients_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeClients", {index : lignes});
                });
        },

        Clients_detail: (req, res) =>{
                sauteuhzModel.Clients_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailClient/:nom/:prenom", {index : lignes});
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
                        res.render("./detailMedoc", {index : lignes});
                });
        },

        Medocs_update_stock: (req, res) =>{
                console.log(1);
                let medoc = req.params.medoc;
                let mois = req.params.mois;
                console.log(medoc);
                sauteuhzModel.Medocs_update_stock(medoc, mois)
                        res.render("./index");

        },

        Medocs_update_besoin: (req, res) =>{
                sauteuhzModel.Medocs_update_besoin()
                        res.render("./testchart", {index : lignes});

        },

        Chart_affichage: (req, res) =>{
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes});
                });
        },

        Admin_affichage: (req, res) =>{
                res.render("./paneladmin");
                
        }

}