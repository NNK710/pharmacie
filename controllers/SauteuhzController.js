
var db = require('../database')
var sauteuhzModel = require('../models/sauteuhzModel');


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

        Clients_detail:function (req, res){
                sauteuhzModel.Clients_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailClients", {index : lignes});
                });
        },

        Medocs_affichage:function (req, res){
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },

        Medocs_detail:function (req, res){
                sauteuhzModel.Medocs_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailMedocs", {index : lignes});
                });
        }

}