const mysql = require('./mysql');

class Database {

    driver = 'mysql';
    connection = null;
    constructor() {
        switch (this.driver) {
            case "mysql":
                this.connection = new mysql(
                    'localhost',
                    'root',
                    '',
                    'express_blog'
                ).connection;
                break;
        }
        if (!this.connection) {
            throw 'No Connection'
        }
    }
}

module.exports = Database;