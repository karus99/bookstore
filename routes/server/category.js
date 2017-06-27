/**
 * Created by zezima on 27.06.2017.
 */

var express = require('express');
var router = express.Router();

var category;

// add category
router.post('/', function(req, res, next)
{
    category.findAll(
        {
            where:
                {
                    name: req.body.name
                }
        }).then(function(category_)
    {
        if(category_.length > 0)
        {
            return res.send("CATEGORY_EXISTS");
        }
    });

    category.build(
        {
            name: req.body.name
        }).save().then(function(category_)
    {
        res.send("CATEGORY_ADDED");
    });
});

// list all categories
router.get('/all', function(req, res, next)
{
    category.findAll(
        {
            order:
                [
                    ['idCat', 'DESC']
                ]
        }).then(function(categories_)
    {
        res.send(JSON.stringify(categories_));
    })
});

// list specified category
router.get('/:id([0-9]+)', function(req, res, next)
{
    category.findAll(
        {
            where:
                {
                    idCat: req.params.id
                }
        }).then(function(category_)
    {
        res.send(JSON.stringify(category_[0]));
    });
});

// delete category
router.delete('/:id', function(req, res, next)
{
    auth = req.app.get("auth");
    if(!auth.logged)
        return res.send("UNAUTHORIZED");

    if(auth.type > 2)
        return res.send("INSUFFICENT PERMISSIONS");

    category.destroy(
        {
            where:
                {
                    idCat: req.params.id
                }
        }).then(function()
    {
        res.send("CATEGORY_REMOVED");
    })
});

// update category
router.put('/:id', function(req, res, next)
{
    auth = req.app.get("auth");
    if(!auth.logged)
        return res.send("UNAUTHORIZED");

    if(auth.type > 2)
        return res.send("INSUFFICENT PERMISSIONS");

    category.update(
        {
            name: req.body.name
        },
        {
            where:
                {
                    idCat: req.params.id
                }
        }).then(function(category_)
    {
        res.send("CATEGORY_UPDATED");
    });
});

module.exports = function(_category)
{
    category = _category;
    return router;
};