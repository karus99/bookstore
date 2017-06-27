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