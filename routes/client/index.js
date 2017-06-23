var express = require('express');
var router = express.Router();

var auth;

/* GET home page. */
router.get('/', function(req, res, next) {

	auth = req.app.get("auth");
	res.render('index', { title: 'Biblioteka Online', auth: auth });
});

module.exports = router;