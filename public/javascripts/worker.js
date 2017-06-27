$('#lo_add_book').click(function()
{
    $.ajax(
    {
        type: "POST",
        url: '/api/book/',
        timeout: 1000,
        data:
        {
            title: $('[name="lo_add_book_title"]').val(),
            author: $('[name="lo_add_book_author"]').val(),
            idCat: $('[name="lo_add_book_cat_id"]').val(),
            description: $('[name="lo_add_book_description"]').val()
        },
        success: function(html)
        {
            console.log(html);
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('body').on('click', '[data-action="file-upload"]', function()
{
	$(this).val('');
});

$('body').on('change', '[data-action="file-upload"]', function()
{
	$('#photo_form').ajaxSubmit(
	{
		error: function(xhr)
		{
        	console.log(xhr);
        },
		success: function(response) 
		{
            console.log(response);
			if(response != "ERROR")
			{
				// $('#photo_container').append(response);
			}
    	}
    });
});

$(document).ready(function() {
	/* GET blocked/unblocked book list. */
	$.ajax(
	{
		type: "GET",
		url: "/api/book/all",
		success: function(html)
		{
			var books = JSON.parse(html);
			for(var i in books) 
			{
				
				if(books[i].active == 0)
				{
					$('#blocks_table').append('\
                        <tr>\
                            <td>' + books[i].title + '</td>\
                            <td><button type="button" id="unblock_book" class="btn btn-sm btn-primary pull-right" data-id="' + books[i].idBook + '">Odblokuj</button></td>\
                        </tr>');
				}
				else if(books[i].active == 1)
				{
					$('#blocks_table').append('\
                        <tr>\
                            <td>' + books[i].title + '</td>\
                            <td><button type="button" id="block_book" class="btn btn-sm btn-danger pull-right" data-id="' + books[i].idBook + '">Zablokuj</button></td>\
                        </tr>');
				}
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});

$('body').on('click', '#block_book', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/book/" + id + "/block",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.replaceWith('<button type="button" id="unblock_book" class="btn btn-sm btn-primary pull-right" data-id="' + id + '">Odblokuj</button>');
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('body').on('click', '#unblock_book', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/book/" + id + "/unblock",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.replaceWith('<button type="button" id="block_book" class="btn btn-sm btn-danger pull-right" data-id="' + id + '">Zablokuj</button>');
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});