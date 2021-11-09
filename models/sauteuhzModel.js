
var db = require('../database')

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

        var sql='SELECT * FROM medicament';
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
    }


}

