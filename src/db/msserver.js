const sql = require("mssql");

//Initiallising connection string
const dbConfig = {
    user: 'sa',
    password: 'Lavalle123$',
    server: '192.168.1.10',
    database: 'werchow'
};

//Function to connect to database and execute query

const msqlconect = sql.connect(dbConfig, function (err) {
    if (err) {
        console.log("Error while connecting database :- " + err);
        res.send(err);
    }else{
        console.log('db conected');
    }

});

module.exports = msqlconect;