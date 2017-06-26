var express = require('express');
var router = express.Router();

var auth;

/* GET home page. */
router.get('/', function(req, res, next) 
{
	auth = req.app.get("auth");
	res.render('admin', { auth: auth });
});

router.get('/add-worker', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('admin_add_worker', { auth: auth });
});

module.exports = router;