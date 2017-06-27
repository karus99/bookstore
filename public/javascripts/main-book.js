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