$(document).ready(function()
{
    var id = $('[name="id"]').val();
    var type = $('[name="type"]').val();
    var URL = '';

    switch(type)
    {
        case 'cat':
            URL = '/api/book/cat/' + id;
            break;
        case 'letter':
            URL = '/api/book/letter/' + id;
            break;
        case 'query':
            URL = '/api/book/' + id;
            break;
    }
    $.ajax(
	{
		type: "GET",
		url: URL,
		success: function(html)
		{
			var books = JSON.parse(html);

            for(i in books)
            {
                $('#results').append('\
                    <div class="row">\
                        <div class="col-md-4 text-center">\
                            <img class="img-inline img-responsive book" src="/uploads/' + books[i].cover + '"/>\
                        </div>\
                        <div class="col-md-8">\
                            <span class="title"><a href="/book/' + books[i].idBook +'">' + books[i].title + '</a></span>\
                            <span class="author">' + books[i].author + '</span>\
                            <span class="status">' + (books[i].active == '1' ? 'DOSTĘPNA' : 'NIE DOSTĘPNA') + '</span>\
                        </div>\
                    </div>');
            }

            if(books.length < 1)
            {
                $('#results').append('\
                    <div class="row">\
                        <div class="col-md-4 text-center">\
                        </div>\
                        <div class="col-md-8">\
                            <span class="title">Brak wyników</span>\
                        </div>\
                    </div>');
            }
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});