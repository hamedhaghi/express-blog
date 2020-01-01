const DB = require('../libraries/database');

class Post {

    findAll(callback) {
        const connection = (new DB()).connection;
        connection.connect();
        connection.query('SELECT * FROM posts', function (error, results, fields) {
            if (error) {
                throw error;
            }
            callback(results);
        });
        connection.end();
    }

    find(id, callback) {
        const connection = (new DB()).connection;
        connection.connect();
        connection.query('SELECT * FROM posts where id = ? limit 1', [id] , function (error, results, fields) {
            if (error) {
                throw error;
            }
            callback(results[0]);
        });
        connection.end();
    }
}

module.exports = Post;