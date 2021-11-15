

//Importation de la connexion à la bdd
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

        var sql='SELECT * FROM medicament';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
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
