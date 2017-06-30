$(document).ready(function()
{
    var id = $('[name="id"]').val();

    $.ajax(
	{
		type: "GET",
		url: "/api/user/" + id + "/lend",
		success: function(html)
		{
			var books = JSON.parse(html);
			
            for(var i in books)
            {
                $('#borrowed_books').append('\
                <tr>\
                    <td id="book_title_' + books[i].idLend +'"></td>\
                    <td>' + books[i].returnDate.substring(0, 19).replace('T', ' ') + '</td>\
                    <td>' + (books[i].returned == null ? 'Nie zwrócona' : books[i].returned.substring(0, 19).replace('T', ' ')) + '</td>\
                </tr>');

                if(books[i].returned == null)
                {
                    $('#prolong_books').append('\
                    <tr>\
                        <td id="book_title_' + books[i].idLend +'"></td>\
                        <td id="date_' + books[i].idLend + '">' + books[i].returnDate.substring(0, 19).replace('T', ' ') + '</td>\
                        <td><button type="button" id="prolong_book" data-id="' + books[i].idLend + '" class="btn btn-sm btn-primary">Prolonguj</button></td>\
                    </tr>');
                }
                

                getBookTitle('#book_title_' + books[i].idLend, books[i].idBook);
            }
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});

$('body').on('click', '#prolong_book', function()
{
	var id = $(this).attr('data-id');
    var uid = $('[name="id"]').val();
	var object = $(this);
    $.ajax(
    {
        type: "PUT",
        url: "/api/user/" + uid + "/lend/" + id + "/prolong",
        timeout: 1000,
        success: function(html)
        {
            console.log(html);
            $('#date_' + id).html(html);
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});

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