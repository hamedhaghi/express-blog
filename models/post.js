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
}

module.exports = Post;