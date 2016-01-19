$(document).ready(function()
{
	$('a[href*=#]').click(function()
	{
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
		{
			var $target = $(this.hash);
		 	$target = $target.length && $target;

		 	if ($target.length) 
		 	{
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
		   		return false;
		 	}
		}
	});
});

/* Login */

$('#login_button').click(function()
{

	if($('#login_login').val() == 'admin' && $('#login_pass').val() == 'admin')
	{
		$('#login_form').hide();
		$('#login_fail').hide();
		$('#login_success').fadeIn();
	}
	else
	{
		$('#login_fail').fadeIn();
	}

});

/* Register */

var check_arr = [];

$('#reg_firstname').keyup(function()
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

$('#reg_lastname').keyup(function()
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

$('#reg_street').keyup(function()
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

$('#reg_city').keyup(function()
{
	if($(this).val().length > 0)
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

$('#reg_pass').keyup(function()
{
	if($(this).val().length > 0)
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[4] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[4] = false;
	}
});

$('#reg_pass_re').keyup(function()
{
	if($(this).val().length > 0)
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[5] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[5] = false;
	}
});

$('#reg_login').keyup(function()
{
	if($(this).val().length > 0)
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[6] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[6] = false;
	}
});

$('#reg_email').keyup(function()
{
	var patt = /[\s\S]+@\w+\.\w+/;

	if(patt.test($(this).val()))
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[7] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[7] = false;
	}

});

$('#reg_postcode').keyup(function()
{
	var patt = /[0-9]{2}\-[0-9]{3}/;

	if(patt.test($(this).val()))
	{
		$(this).parent().children('.fa-check-circle').fadeIn();
		$(this).parent().children('.fa-times-circle').hide();
		check_arr[8] = true;
	}
	else
	{
		$(this).parent().children('.fa-check-circle').hide();
		$(this).parent().children('.fa-times-circle').fadeIn();
		check_arr[8] = false;
	}

});

$('#reg_button').click(function()
{
	var foundErr = false;

	for(var i = 0; i < 9; i ++)
	{
		if(check_arr[i] == false)
		{
			foundErr = true;
		}
	}

	if(!foundErr && typeof check_arr[8] != 'undefined')
	{
		$('#reg_form').hide();
		$('#reg_fail').hide();
		$('#reg_success').fadeIn();
	}
	else
	{
		$('#reg_fail').fadeIn();
	}

});
