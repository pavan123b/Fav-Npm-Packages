const { Pool } = require("pg");

const pool = new Pool({
    user :"postgres",
    host :"localhost",
    port :5432,
    database : "favnpmpkgs",
    password : "bisket"
});

module.exports = pool;