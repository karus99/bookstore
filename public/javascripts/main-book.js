$(document).ready(function()
{
    $.ajax(
	{
		type: "GET",
		url: "/api/book/" + $('[name="book-id"]').val(),
		success: function(html)
		{
			var book = JSON.parse(html);
			
            $('.title').html(book.title);
            $('.author').html(book.author);

            $.ajax(
            {
                type: "GET",
                url: "/api/category/" + book.idCat,
                success: function(html)
                {
                    var category = JSON.parse(html);
                    $('.genere').html(category.name);
                }
            });

            if(book.active != '1')
            {
                $('.status').removeClass('text-success');
                $('.status').addClass('text-danger');
                $('.status').html('NIE DOSTĘPNA');
            }

            $('.book-cover').attr('src', '/uploads/' + book.cover);

            $('.description').html(book.description);
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});

$('.btn-reserve').click(function()
{
    var bid = $('[name="book-id"]').val();
    var uid = $('[name="id"]').val();
    $.ajax(
    {
        type: "POST",
        url: "/api/user/" + uid + "/lend/" + bid,
        timeout: 1000,
        success: function(html)
        {
            if(html == "USER_NOT_ACTIVE")
            {
                $('.error-text').removeClass('hide');
                $('.error-text').addClass('alert-danger');
                $('.error-text').text('Twój użytkownik jest zablokowany.');              
            }
            else if(html == "BOOK_NOT_ACTIVE")
            {
                $('.error-text').removeClass('hide');
                $('.error-text').addClass('alert-danger');
                $('.error-text').text('Książka jest niedostępna.');              
            }
            else if(html == "ALREADY_THERE")
            {
                $('.error-text').removeClass('hide');
                $('.error-text').addClass('alert-danger');
                $('.error-text').text('Już wypożyczyłeś tą książkę.');              
            }
            else
            {
                $('.error-text').removeClass('hide');
                $('.error-text').addClass('alert-success');
                $('.error-text').text('Książka wypożyczona.');              
            }
            console.log(html);
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});