var express = require('express');
var router = express.Router();
const dateFormat = require('dateformat');
const post = new (require('../models/post'))();


router.get('/', function (req, res) {

    post.findAll((posts) => {
        res.render('./post/index', {title: 'Posts', posts : posts, dateFormat: dateFormat});
    })
});


router.get('/:id', function (req, res) {

    const id = req.params.id;
    post.find(id,(item) => {
        if(!item) res.sendStatus(404);
        res.render('./post/show', {title: item.name, post : item, dateFormat: dateFormat});
    });

});





module.exports = router;
