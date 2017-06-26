var express = require('express');
var router = express.Router();

var auth;

/* GET home page. */
router.get('/', function(req, res, next) 
{
	auth = req.app.get("auth");
	res.render('user', { auth: auth });
});

router.get('/prolong', function(req, res, next)
{
	auth = req.app.get("auth");
	res.render('user_prolong', { auth: auth });
});

router.get('/books', function(req, res, next)
{
	auth = req.app.get("auth");
	res.render('user_books', { auth: auth });
});

module.exports = router;