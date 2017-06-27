var express = require('express');
var router = express.Router();

var auth;

/* GET home page. */
router.get('/', function(req, res, next) 
{
	auth = req.app.get("auth");
	res.render('index', { title: 'Biblioteka Online', auth: auth });
});

router.get('/signout', function(req, res, next)
{
	res.clearCookie('loSessionToken');
	res.redirect('/');
});

router.get('/book/:id', function(req, res, next)
{
	auth = req.app.get("auth");
	res.render('index_book', { auth: auth, id: req.params.id });
});

router.get('/cat/:id', function(req, res, next)
{
	auth = req.app.get("auth");
	res.render('index_results', { auth: auth, id: req.params.id, type: 'cat' });
})

router.get('/letter/:id', function(req, res, next)
{
	auth = req.app.get("auth");
	res.render('index_results', { auth: auth, id: req.params.id, type: 'letter' });
})

router.get('/query/:query', function(req, res, next)
{
	auth = req.app.get("auth");
	res.render('index_results', { auth: auth, id: req.params.query, type: 'query' });
})

module.exports = router;