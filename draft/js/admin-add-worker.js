var check_arr = [];

$('#add_firstname').keyup(function()
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

$('#add_lastname').keyup(function()
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

$('#add_login').keyup(function()
{
	if($(this).val().length > 0)
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[2] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[2] = false;
	}
});

$('#add_email').keyup(function()
{
	var patt = /[\s\S]+@\w+\.\w+/;

	if(patt.test($(this).val()))
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[3] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[3] = false;
	}
});

$('#add_button').click(function()
{
	var foundErr = false;

	for(var i = 0; i < 4; i ++)
	{
		if(check_arr[i] == false)
		{
			foundErr = true;
		}
	}

	if(!foundErr && typeof check_arr[3] != 'undefined')
	{
		$('#add_form').hide();
		$('#add_fail').hide();
		$('#add_success').fadeIn();
	}
	else
	{
		$('#add_fail').fadeIn();
	}

});