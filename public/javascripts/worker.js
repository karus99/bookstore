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