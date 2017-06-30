$(document).ready(function()
{
    var id = $('[name="id"]').val();

    $.ajax(
	{
		type: "GET",
		url: "/api/user/lends",
		success: function(html)
		{
			var books = JSON.parse(html);
			
            for(var i in books)
            {
                var d = new Date(Date.parse(books[i].returnDate));
                var now = new Date();

                $('#return_books').append('\
                <tr>\
                    <td id="username_' + books[i].idLend +'"></td>\
                    <td id="book_title_' + books[i].idLend +'"></td>\
                    <td id="date_' + books[i].idLend + '" class="' + (d < now ? 'text-danger' : '') +'">' + books[i].returnDate.substring(0, 19).replace('T', ' ') + '</td>\
                    <td><button type="button" id="return_book" data-id="' + books[i].idLend + '" class="btn btn-sm btn-primary">Zwróć</button></td>\
                </tr>');

                getUsername('#username_' + books[i].idLend, books[i].idUser);
                getBookTitle('#book_title_' + books[i].idLend, books[i].idBook);
            }
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});

$('body').on('click', '#return_book', function()
{
	var id = $(this).attr('data-id');
    var uid = $('[name="id"]').val();
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/user/" + uid + "/lend/" + id + "/return",
        timeout: 1000,
        success: function(html)
        {
            if(html == "BOOK_RETURNED")
            {
                object.parent().parent().remove();
            }
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

function getUsername(target, id)
{
    $.ajax(
    {
        type: "GET",
        url: "/api/user/" + id,
        success: function(html)
        {
            var user = JSON.parse(html);
            
            $(target).text(user.email);
        },
        error: function(html)
        {
            console.log(html);
        }
    });
}

function getBookTitle(target, id)
{
    $.ajax(
    {
        type: "GET",
        url: "/api/book/" + id,
        success: function(html)
        {
            var book = JSON.parse(html);
            
            $(target).text(book.title);
        },
        error: function(html)
        {
            console.log(html);
        }
    });
}