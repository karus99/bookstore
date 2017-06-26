var express = require('express');
var router = express.Router();

var auth;

/* GET home page. */
router.get('/', function(req, res, next) 
{
	auth = req.app.get("auth");
	res.render('worker', { auth: auth });
});

router.get('/add-book', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_add_book', { auth: auth });
});

router.get('/edit-book', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_edit_book', { auth: auth });
});

router.get('/block-book', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_block_book', { auth: auth });
});

module.exports = router;