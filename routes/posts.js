var express = require('express');
var router = express.Router();
const dateFormat = require('dateformat');
const post = new (require('../models/post'))();
/* GET users listing. */
router.get('/', function (req, res, next) {

    post.findAll((posts) => {
        res.render('./posts', {title: 'Posts', posts : posts, dateFormat: dateFormat});
    })
});

module.exports = router;
