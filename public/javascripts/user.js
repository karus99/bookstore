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
                $.ajax(
                {
                    type: "GET",
                    url: "/api/book/" + books[i].idBook,
                    success: function(html)
                    {
                        var book = JSON.parse(html);
                        
                        $('#borrowed_books').append('\
                        <tr>\
                            <td>' + book.title + '</td>\
                            <td>' + books[i].returnDate.substring(0, 19).replace('T', ' ') + '</td>\
                            <td>' + books[i].returned + '</td>\
                        </tr>');

                        $('#prolong_books').append('\
                        <tr>\
                            <td>' + book.title + '</td>\
                            <td id="date_' + books[i].idLend + '">' + books[i].returnDate.substring(0, 19).replace('T', ' ') + '</td>\
                            <td><button type="button" id="prolong_book" data-id="' + books[i].idLend + '" class="btn btn-sm btn-primary">Prolonguj</button></td>\
                        </tr>');
                    },
                    error: function(html)
                    {
                        console.log(html);
                    }
                });
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