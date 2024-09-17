const db = require('./db.js');

console.log('Je passe dans models/message.model.js')

//Constructeur
const Message = function(lemessage) {
    this.nom = lemessage.nom;
    this.msg = lemessage.msg;
    //this.date_creation = new Date();
}


Message.create = function(newMsg, resultat) {
    db.query("INSERT INTO messages (nom, message) VALUES (?,?)", [newMsg.nom, newMsg.msg], function(err, res) {
        if (err) {        
            console.log("Erreur Message.create: ", + err);
            resultat(err, null);
            return;
        }
        console.log("Réponse Message.create: ", + res);
        resultat (null, res);
    });
};

        
// Méthode pour lire tous les messages dans la DB
Message.readAll = function(resultat) {
    db.query("SELECT * FROM messages ORDER BY datemessage DESC", function(err,res){ 
        if (err) {    
            console.log("Erreur Message.readAll : ", err);
            resultat (err, null);
            return;
    // Si données reçues
        }
        console.log("Réponse Message.readAll : ", res);
        resultat (null, res);
    });
};


module.exports = Message;