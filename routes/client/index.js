var express = require('express');
var router = express.Router();

var auth;

/* GET home page. */
router.get('/', function(req, res, next) {

	auth = req.app.get("auth");
	res.render('index', { title: 'Biblioteka Online', auth: auth });
});

router.get('/signout', function(req, res, next)
{
	res.clearCookie('loSessionToken');
	res.redirect('/');
});

module.exports = router;