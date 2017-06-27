var express = require('express');
var router = express.Router();

var auth;
var photo;

/* GET home page. */
router.get('/', function(req, res, next) 
{
	auth = req.app.get("auth");
	res.render('worker', { auth: auth });
});

router.get('/add-book', function(req, res, next)
{
    auth = req.app.get("auth");

	photo.build(
	{
		path: 'no-cover.jpg'
	}).save();

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

router.get('/add-category', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_add_category', { auth: auth });
});

router.get('/del-category', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_del_category', { auth: auth });
});

router.get('/add-del-user', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_add_del_user', { auth: auth });
});

router.get('/recommmend', function(req, res, next)
{
    auth = req.app.get("auth");
	res.render('worker_add_del_recomendation', { auth: auth });
});

module.exports = function(_photo)
{
	photo = _photo;
	return router;
};