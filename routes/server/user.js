var express = require('express');
var router = express.Router();

var user;

/* GET home page. */

router.post('/', function(req, res, next) 
{
	var token = createToken();

	user.build(
	{
		email: req.body.email,
		password: req.body.password,
		session_token: token,
		session_expire_timestemp: (Date.now() / 1000) + (60 * 60 * 24 * 7),
		active: 3,
		type: 0
	}).save().then(function(user)
	{
		var cookie = req.cookies.loSessionToken;
		if (cookie === undefined)
		{
			res.cookie('loSessionToken', token,
			{ 
    			expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)), 
				httpOnly: false 
			});
			console.log('cookie created successfully');
		} 
		else
		{
			console.log('cookie exists', cookie);
		}
		
		res.send("USER_ADDED");
	});
});

function createToken()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i = 0; i < 32; i ++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = function(_user)
{
	user = _user;
	return router;
};