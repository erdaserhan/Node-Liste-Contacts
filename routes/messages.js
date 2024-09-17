var express = require('express');
var router = express.Router();

/* Toutes les routers décrites dans ce fichier correspandent à des URL commençant par : localhost:8080/messages/...   */

// route pour l'URL : localhost:8080/messages/
router.get('/', function(req, res, next) {
    console.log('GET /messages/ pour lire tous les messages');
    res.send("Ici, on aura lecture des messages");
});

router.post('/create', function(req, res, next) {
    console.log('POST créer un message');
});

module.exports = router;

