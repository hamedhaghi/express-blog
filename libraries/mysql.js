const mysql = require('mysql');
class MySql {
    connection;
    host = '';
    user = '';
    password = '';
    database = '';
    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({
            host,
            user,
            password,
            database,
        });
    }

}

module.exports = MySql;


/*connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})*/
