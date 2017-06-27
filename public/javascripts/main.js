$(document).ready(function()
{
    $.ajax(
	{
		type: "GET",
		url: "/api/category/all",
		success: function(html)
		{
			var categories = JSON.parse(html);
			for(var i in categories) 
			{
				$('#categories').append('\
                    <div class="book-list">\
                        <div class="col-xs-12">\
                            <a href="/cat/' + categories[i].idCat + '">' + categories[i].name + '</a>\
                        </div>\
                    </div>');
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});

    $.ajax(
	{
		type: "GET",
		url: "/api/book/all",
		success: function(html)
		{
			var books = JSON.parse(html);
			for(var i in books) 
			{
                if(i > 4)
                    break;

                if(i == 0)
                {
                    $('#lastest').append('\
                    <div class="book-list">\
                        <div class="col-xs-2">\
                            ' + (parseInt(i) + 1) + '\
                        </div>\
                        <div class="col-xs-10">\
                            <a href="/book/' + books[i].idBook + '">' + books[i].title + '</a>\
                        </div>\
                    </div>\
                    <div class="book-details">\
                        <img src="/uploads/' + books[i].cover + '" />\
                    </div>');
                }
                else
                {
                    $('#lastest').append('\
                    <div class="book-list">\
                        <div class="col-xs-2">\
                            ' + (parseInt(i) + 1) + '\
                        </div>\
                        <div class="col-xs-10">\
                            <a href="/book/' + books[i].idBook + '">' + books[i].title + '</a>\
                        </div>\
                    </div>');
                }
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});

    $.ajax(
	{
		type: "GET",
		url: "/api/book/recommended",
		success: function(html)
		{
			var books = JSON.parse(html);
			for(var i in books) 
			{
                if(i > 4)
                    break;

                if(i == 0)
                {
                    $('#recomended').append('\
                    <div class="book-list">\
                        <div class="col-xs-2">\
                            ' + (parseInt(i) + 1) + '\
                        </div>\
                        <div class="col-xs-10">\
                            <a href="/book/' + books[i].idBook + '">' + books[i].title + '</a>\
                        </div>\
                    </div>\
                    <div class="book-details">\
                        <img src="/uploads/' + books[i].cover + '" />\
                    </div>');
                }
                else
                {
                    $('#recomended').append('\
                    <div class="book-list">\
                        <div class="col-xs-2">\
                            ' + (parseInt(i) + 1) + '\
                        </div>\
                        <div class="col-xs-10">\
                            <a href="/book/' + books[i].idBook + '">' + books[i].title + '</a>\
                        </div>\
                    </div>');
                }
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});

    $.ajax(
	{
		type: "GET",
		url: "/api/book/popular",
		success: function(html)
		{
			var books = JSON.parse(html);
			for(var i in books) 
			{
                if(i > 4)
                    break;

                if(i == 0)
                {
                    $('#popular').append('\
                    <div class="book-list">\
                        <div class="col-xs-2">\
                            ' + (parseInt(i) + 1) + '\
                        </div>\
                        <div class="col-xs-10">\
                            <a href="/book/' + books[i].idBook + '">' + books[i].title + '</a>\
                        </div>\
                    </div>\
                    <div class="book-details">\
                        <img src="/uploads/' + books[i].cover + '" />\
                    </div>');
                }
                else
                {
                    $('#popular').append('\
                    <div class="book-list">\
                        <div class="col-xs-2">\
                            ' + (parseInt(i) + 1) + '\
                        </div>\
                        <div class="col-xs-10">\
                            <a href="/book/' + books[i].idBook + '">' + books[i].title + '</a>\
                        </div>\
                    </div>');
                }
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});