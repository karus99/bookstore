var express = require('express');
var router = express.Router();

var book;

router.post('/', function(req, res, next)
{
    book.build(
	{
		title: req.body.title,
		author: req.body.author,
		idCat: req.body.idCat,
		active: 1,
		description: req.body.description
	}).save().then(function(book_)
	{
		res.send("BOOK_ADDED");
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
	// TO-DO: admin check
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
	// TO-DO: admin check
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
	// TO-DO: admin check
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

module.exports = function(_book)
{
	book = _book;
	return router;
};