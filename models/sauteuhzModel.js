

//Importation de la connexion à la bdd
const mysqlconnexion = require('../database');
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Clients_affichage:function(callback){
  
    
        var sql='SELECT * FROM client';
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

        var sql='SELECT medoc_nom FROM medicament';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Medocs_detail:function(callback) {

        var sql='SELECT medoc_nom FROM medicament';
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

        var sql='SELECT * FROM stockmgnt';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    }

}
