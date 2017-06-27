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
		active: 1,
		type: 3
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

router.post('/login', function(req, res, next)
{
	user.findAll(
	{
		where:
		{
			email: req.body.email,
			password: req.body.password
		}
	}).then(function(_user)
	{
		var token = createToken();

		user.update(
		{
			session_token: token,
			session_expire_timestemp: (Date.now() / 1000) + (60 * 60 * 24 * 7)
		},
		{
			where:
			{
				id: _user[0].dataValues.id
			}
		}).then(function(user_) 
		{
			res.cookie('loSessionToken', token,
			{ 
				expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)), 
				httpOnly: false 
			});

			auth = req.app.get("auth");
			auth.email = _user[0].dataValues.email;
			auth.id = _user[0].dataValues.id;
			auth.logged = true;

			req.app.set("auth", auth);
			res.send("USER_LOGGED");
		});
	});
});

router.get('/all', function(req, res, next)
{
	user.findAll(
	{
		order:
		[
			['id', 'DESC']
		]
	}).then(function(users_)
	{
		res.send(JSON.stringify(users_));
	})
});

router.get('/:id', function(req, res, next)
{
	user.findAll(
	{
		where:
		{
			id: req.params.id
		}	
	}).then(function(user_)
	{
		res.send(JSON.stringify(user_[0]));
	});
})

router.delete('/:id', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type != 1)
		return res.send("INSUFFICENT PERMISSIONS");

	user.destroy(
	{
		where:
		{
			id: req.params.id
		}
	}).then(function()
	{
		res.send("USER_REMOVED");
	})
});

router.put('/:id/worker', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type != 1)
		return res.send("INSUFFICENT PERMISSIONS");

	user.update(
	{
		type: 2
	},
	{
		where:
		{
			id: req.params.id
		}
	}).then(function(user_)
	{
		res.send("WORKER_SET");
	});
});

router.put('/:id/user', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type != 1)
		return res.send("INSUFFICENT PERMISSIONS");

	user.update(
	{
		type: 3
	},
	{
		where:
		{
			id: req.params.id
		}
	}).then(function(user_)
	{
		res.send("USER_SET");
	});
});

router.put('/:id/block', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	user.update(
	{
		active: 0
	},
	{
		where:
		{
			id: req.params.id
		}
	}).then(function(user_)
	{
		res.send("USER_BLOCKED");
	});
});

router.put('/:id/unblock', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	user.update(
	{
		active: 1
	},
	{
		where:
		{
			id: req.params.id
		}
	}).then(function(user_)
	{
		res.send("USER_ACTIVATED");
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