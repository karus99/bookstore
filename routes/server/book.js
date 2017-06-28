var express = require('express');
var router = express.Router();

var book;
var photo;

var multer = require('multer');
var storage = multer.diskStorage(
{
	destination: function (req, file, callback) 
	{
		callback(null, './public/uploads');
	},
	filename: function (req, file, callback) 
	{
		callback(null, req.params.filename);
	}
});
var upload = multer({ storage : storage}).single('file_0');

router.post('/', function(req, res, next)
{
	var coverPath = '';
	var _idPhoto = -1;

	photo.findAll(
	{
		order:
		[
			['idPhoto', 'DESC']
		]
	}).then(function(photo_)
	{
		if(photo_.length > 0)
		{
			coverPath = photo_[0].dataValues.path;
			_idPhoto = photo_[0].dataValues.idPhoto;
		}

		book.build(
		{
			title: req.body.title,
			author: req.body.author,
			idCat: req.body.idCat,
			active: 1,
			cover: coverPath,
			description: req.body.description
		}).save().then(function(book_)
		{
			res.send("BOOK_ADDED");

			photo.destroy(
			{
				where:
				{
					idPhoto:
					{
						$le: _idPhoto
					}
				}
			});
		});
	});
});

router.get('/all', function(req, res, next)
{
	book.findAll(
	{
		order:
		[
			['idBook', 'DESC']
		]
	}).then(function(books_)
	{
		res.send(JSON.stringify(books_));
	})
});

router.get('/:id([0-9]+)', function(req, res, next)
{
	book.findAll(
	{
		where:
		{
			idBook: req.params.id
		}	
	}).then(function(book_)
	{
		res.send(JSON.stringify(book_[0]));
	});
})

router.get('/cat/:id', function(req, res, next)
{
    book.findAll(
	{
		where:
		{
			idCat: req.params.id
		}	
	}).then(function(books_)
	{
		res.send(JSON.stringify(books_));
	});
});

router.get('/letter/:letter', function(req, res, next)
{
	book.findAll(
	{
		where:
		{
			title:
			{
				$like: req.params.letter + '%'
			}
		}	
	}).then(function(books_)
	{
		res.send(JSON.stringify(books_));
	});
});

router.get('/recommended', function(req, res, next)
{
	book.findAll(
	{
		where:
		{
			recommended: 1
		},
		order:
		[
			['idBook', 'DESC']
		]
	}).then(function(books_)
	{
		res.send(JSON.stringify(books_));
	});
});

router.get('/popular', function(req, res, next)
{
	book.findAll(
	{
		order:
		[
			['visits', 'DESC']
		]
	}).then(function(books_)
	{
		res.send(JSON.stringify(books_));
	});
});

router.get('/:query', function(req, res, next)
{
    book.findAll(
	{
		where:
		{
			title:
            {
                $like: '%' + req.params.query + '%'
            } 
		}	
	}).then(function(books_)
	{
		res.send(JSON.stringify(books_));
	});
});

router.delete('/:id', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	book.destroy(
	{
		where:
		{
			idBook: req.params.id
		}
	}).then(function()
	{
		res.send("BOOK_REMOVED");
	})
});

router.put('/:id', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	book.update(
	{
		title: req.body.title,
		author: req.body.author,
		idCat: req.body.idCat,
		description: req.body.description
	},
	{
		where:
		{
			idBook: req.params.id
		}
	}).then(function(book_)
	{
		res.send("BOOK_UPDATED");
	});
});

router.put('/:id/block', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	book.update(
	{
		active: 0
	},
	{
		where:
		{
			idBook: req.params.id
		}
	}).then(function(user_)
	{
		res.send("BOOK_BLOCKED");
	});
});

router.put('/:id/unblock', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");
		
	book.update(
	{
		active: 1
	},
	{
		where:
		{
			idBook: req.params.id
		}
	}).then(function(user_)
	{
		res.send("BOOK_UNBLOCKED");
	});
});

router.put('/:id/recommend', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	book.update(
	{
		recommended: 1
	},
	{
		where:
		{
			idBook: req.params.id
		}
	}).then(function(user_)
	{
		res.send("BOOK_RECOMMENDED");
	});
});

router.put('/:id/unrecommend', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");
		
	book.update(
	{
		recommended: 0
	},
	{
		where:
		{
			idBook: req.params.id
		}
	}).then(function(user_)
	{
		res.send("BOOK_UNRECOMMENDED");
	});
});

router.put('/:id/visit', function(req, res, next)
{
	auth = req.app.get("auth");
	if(!auth.logged)
		return res.send("UNAUTHORIZED");

	if(auth.type > 2)
		return res.send("INSUFFICENT PERMISSIONS");

	book.findAll(
	{
		where:
		{
			idBook: req.params.id
		}	
	}).then(function(books_)
	{
		book.update(
		{
			visits: books_[0].visits + 1
		},
		{
			where:
			{
				idBook: req.params.id
			}
		}).then(function(user_)
		{
			res.send("BOOK_VISIT_ADDED");
		});
	});
});


var photoCount = 0;
router.post('/cover', function(req, res, next)
{
	req.params.filename = photoCount + '-' + Date.now() + '.jpg';

	upload(req, res, function(err)
	{
		if(err) 
		{
			return res.end("ERROR");
		}

		photo.build(
		{
			path: req.params.filename
		}).save().then(function(photo)
		{
			res.send(req.params.filename);
			photoCount++;
		});
	});
});

router.post('/:id/cover', function(req, res, next)
{
	req.params.filename = photoCount + '-' + Date.now() + '.jpg';

	upload(req, res, function(err)
	{
		if(err) 
		{
			return res.end("ERROR");
		}

		book.update(
		{
			cover: req.params.filename
		},
		{
			where:
			{
				idBook: req.params.id
			}
		}).then(function(book_)
		{
			res.send(req.params.filename);
			photoCount++;
		});
	});
});

module.exports = function(_book, _photo)
{
	book = _book;
	photo = _photo;
	return router;
};