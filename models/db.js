const mysql = require('mysql');
const dbConfig = require('../config/dbconfig.js');

const connection = mysql.createConnection({
    host: dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_NAME,
    port: dbConfig.DB_PORT
});

connection.connect(function(error){
    if (error) throw error;
    console.log('Connecté avec succès à la base de donnèes !');
});

module.exports = connection;