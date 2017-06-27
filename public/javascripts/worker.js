$('#lo_add_book').click(function()
{
    for(var i = 0; i < 2; i ++)
    {
        if(check_arr[i] == false || check_arr[i] === undefined)
        {
            $('#add_fail').fadeIn();
            $('#add_fail .error-text').html('Niepoprawne dane.');
            return;
        }
    }

    $('#add_fail').fadeOut();

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
            if(html == "BOOK_ADDED")
            {
               window.location.replace("/worker/edit-book");
            }
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('#lo_add_cat').click(function()
{
    for(var i = 0; i < 1; i ++)
    {
        if(check_arr[i] == false || check_arr[i] === undefined)
        {
            $('#add_fail').fadeIn();
            $('#add_fail .error-text').html('Niepoprawne dane.');
            return;
        }
    }

    $('#add_fail').fadeOut();

    $.ajax(
    {
        type: "POST",
        url: '/api/category/',
        timeout: 1000,
        data:
        {
            name: $('[name="lo_add_cat_name"]').val()
        },
        success: function(html)
        {
            console.log(html);
            if(html == "CATEGORY_ADDED")
            {
               window.location.replace("/worker/del-category");
            }
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

check_arr = [];

$('#add_title').keyup(function()
{
	if($(this).val().length > 0)
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[0] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[0] = false;
	}
});

$('#add_author').keyup(function()
{
	if($(this).val().length > 0)
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[1] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[1] = false;
	}
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
					$('#books_table').append('\
                        <tr>\
                            <td>' + books[i].title + '</td>\
                            <td><button type="button" id="unblock_book" class="btn btn-sm btn-primary pull-right" data-id="' + books[i].idBook + '">Odblokuj</button></td>\
                        </tr>');
				}
				else if(books[i].active == 1)
				{
					$('#books_table').append('\
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

    /* GET recommendated/unrecommendated book list. */
	$.ajax(
	{
		type: "GET",
		url: "/api/book/all",
		success: function(html)
		{
			var books = JSON.parse(html);
			for(var i in books) 
			{
				if(books[i].recommended == 0)
				{
					$('#recommendated_books_table').append('\
                        <tr>\
                            <td>' + books[i].title + '</td>\
                            <td><button type="button" id="recommend_book" class="btn btn-sm btn-danger pull-right" data-id="' + books[i].idBook + '">Nierekomendowana</button></td>\
                        </tr>');
				}
				else if(books[i].recommended == 1)
				{
					$('#recommendated_books_table').append('\
                        <tr>\
                            <td>' + books[i].title + '</td>\
                            <td><button type="button" id="unrecommend_book" class="btn btn-sm btn-primary pull-right" data-id="' + books[i].idBook + '">Rekomendowana</button></td>\
                        </tr>');
				}
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});

    /* GET categories list. */
	$.ajax(
	{
		type: "GET",
		url: "/api/category/all",
		success: function(html)
		{
			var categories = JSON.parse(html);
			for(var i in categories) 
			{
				$('#categories_table').append('\
                    <tr>\
                        <td>' + categories[i].name + '</td>\
                        <td><button type="button" id="lo_remove_cat" class="btn btn-sm btn-danger pull-right" data-id="' + categories[i].idCat + '">Usuń</button></td>\
                    </tr>');

                $('[name="lo_add_book_cat_id"]').append('\
                <option value="' + categories[i].idCat + '">' + categories[i].name + '</option>');
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});

    /* GET users/workers list. */
	$.ajax(
	{
		type: "GET",
		url: "/api/user/all",
		success: function(html)
		{
			var users = JSON.parse(html);
			var type = $('#users_table').attr('data-type');
			for(var i in users) 
			{
				if(users[i].active == 0)
				{
					$('#users_table').append('\
			<tr>\
				<td>' + users[i].email + '</td>\
				<td><button type="button" id="unblock_user" class="btn btn-sm btn-primary pull-right" data-id="' + users[i].id + '">Odblokuj</button></td>\
			</tr>');
				}
				else if(users[i].active == 1)
				{
					$('#users_table').append('\
			<tr>\
				<td>' + users[i].email + '</td>\
				<td><button type="button" id="block_user" class="btn btn-sm btn-danger pull-right" data-id="' + users[i].id + '">Zablokuj</button></td>\
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



$('body').on('click', '#block_user', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/user/" + id + "/block",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.replaceWith('<button type="button" id="unblock_user" class="btn btn-sm btn-primary pull-right" data-id="' + id + '">Odblokuj</button>');
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('body').on('click', '#unblock_user', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/user/" + id + "/unblock",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.replaceWith('<button type="button" id="block_user" class="btn btn-sm btn-danger pull-right" data-id="' + id + '">Zablokuj</button>');
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
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

$('body').on('click', '#lo_remove_cat', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "DELETE",
        url: "/api/category/" + id,
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.parent().parent().remove();
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('body').on('click', '#recommend_book', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/book/" + id + "/recommend",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.replaceWith('<button type="button" id="recommend_book" class="btn btn-sm btn-primary pull-right" data-id="' + books[i].idBook + '">Rekomendowana</button>');
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('body').on('click', '#unrecommend_book', function()
{
	var id = $(this).attr('data-id');
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/book/" + id + "/unrecommmend",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
			object.replaceWith('<button type="button" id="unrecommend_book" class="btn btn-sm btn-danger pull-right" data-id="' + books[i].idBook + '">Nierekomendowana</button>');
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});