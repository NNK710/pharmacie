//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
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
                let cli_secu = req.query['cli_secu'];
                console.log(cli_secu);
                sauteuhzModel.Clients_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailClient", {index : lignes});
                }, cli_secu);
        },

        Ajouter_Client: (req, res) =>{

                res.render("./ajouterClient" ); 
        },

        Add_Client: (req, res) =>{
                let cli_secu = req.query['cli_secu'];
                let cli_nom = req.query['cli_nom'];
                let cli_prenom = req.query['cli_prenom'];
                let cli_naissance = req.query['cli_naissance'];
                let cli_mutuelle = req.query['cli_mutuelle'];
                sauteuhzModel.Ajouter_client( cli_secu, cli_nom, cli_prenom, cli_naissance, cli_mutuelle)
                sauteuhzModel.Clients_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeClients", {index : lignes});
                });
        },

        Ajouter_Medoc: (req, res) =>{

                res.render("./ajouterMedoc" ); 
        },

        Add_Medoc: (req, res) =>{
                let medoc_nom = req.query['medoc_nom'];
                let medoc_type = req.query['medoc_type'];
                let medoc_description = req.query['medoc_description'];
                sauteuhzModel.Ajouter_Medoc( medoc_nom, medoc_type, medoc_description)
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },


        Medocs_affichage: (req, res) =>{
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },

        Medocs_detail: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                sauteuhzModel.Medocs_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailMedoc", {index : lignes});
                },medoc_Id);
        },

        Medocs_update_stock: (req, res) =>{
                let medoc_Id = req.params.medoc_Id;
                let medoc = req.body.medoc;
                let mois = req.body.mois;
                console.log(medoc_Id);
                console.log(medoc);

                let Mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
                mois = Mois[mois-1];
                

                sauteuhzModel.Medocs_update_stock(medoc, mois, medoc_Id)
                
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes, medoc_Id : medoc_Id});
                }, medoc_Id);

        },

        Medocs_update_besoin: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                let medoc = req.query['medoc'];
                let mois = req.query['mois'];

                let Mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
                mois = Mois[mois-1];

                console.log(medoc);
                console.log(mois);
                sauteuhzModel.Medocs_update_besoin(medoc_Id, medoc, mois)
                
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes});
                }, medoc_Id);

        },

        Chart_affichage: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                console.log(medoc_Id);
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes, medoc_Id : medoc_Id});
                }, medoc_Id);
        },

}