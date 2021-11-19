

//Importation de la connexion à la bdd
const mysqlconnexion = require('../database');
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Clients_affichage:function(callback){
  
    
        var sql='SELECT cli_nom, cli_prenom FROM client';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
        
    },

    Clients_detail:function(callback){

        var sql='SELECT * FROM client';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Medocs_affichage:function(callback) {

        var sql='SELECT medoc_Id, medoc_nom FROM medicament';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Medocs_detail:function(callback, medoc_Id) {

        var sql='SELECT medoc_Id, medoc_nom, medoc_type FROM medicament where medoc_Id='+medoc_Id+'';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Medocs_update_stock: (medoc, mois) =>{

        let sql = "UPDATE stockmgnt SET stock = "+medoc+" WHERE ID = "+mois+"";
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });

    },

    Medocs_update_besoin: (medoc, mois) =>{

        let sql = "UPDATE stockmgnt SET Besoin = "+medoc+" WHERE ID = "+mois+"";
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
    },

    Chart_affichage:function(callback) {

        var sql='SELECT medoc_stockJanvier, medoc_stockFevrier, medoc_stockMars, medoc_stockAvril, medoc_stockMai, medoc_stockJuin, medoc_stockJuillet,medoc_stockAout, medoc_stockSeptembre, medoc_stockOctobre, medoc_stockNovembre, medoc_stockDecembre, medoc_besoinJanvier,medoc_besoinFevrier, medoc_besoinMars, medoc_besoinAvril, medoc_besoinMai, medoc_besoinJuin, medoc_besoinJuillet, medoc_besoinAout, medoc_besoinSeptembre, medoc_besoinOctobre, medoc_besoinNovembre, medoc_besoinDecembre FROM medicament Where medoc_Id= 2';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    }

}
