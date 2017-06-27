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

/* Register */

var check_arr = [];

$('#reg_pass').keyup(function()
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

$('#reg_pass_re').keyup(function()
{
	if($(this).val().length > 0 && $(this).val() == $('#reg_pass').val())
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

$('#reg_email').keyup(function()
{
	var patt = /[\s\S]+@\w+\.\w+/;

	if(patt.test($(this).val()))
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

$('#lo_register').click(function()
{
    for(var i = 0; i < 3; i ++)
    {
        if(check_arr[i] == false || check_arr[i] === undefined)
        {
            $('#reg_fail').fadeIn();
            $('#reg_fail .error-text').html('Niepoprawne dane.');
            return;
        }
    }

    $('#reg_fail').fadeOut();

    $.ajax( 
    {
        type: "POST",
        url: '/api/user',
        timeout: 1000,
        data:
        {
            email: $('[name="lo_register_email"]').val(),
            password: $('[name="lo_register_password"]').val()
        },
        success: function(html)
        {
            if(html == 'EMAIL_EXISTS')
            {
                $('#reg_fail').fadeIn();
                $('#reg_fail .error-text').html('Taki adres e-mail już istnieje.');
                return;
            }
            console.log(html);
            window.location.replace("/");
        },
        beforeSend: function(){},
        error: function(html)
        {
            console.error(html);
        }
    });
});

$('#lo_login').click(function()
{
    $.ajax(
    {
        type: "POST",
        url: '/api/user/login',
        timeout: 1000,
        data:
        {
            email: $('[name="lo_login_email"]').val(),
            password: $('[name="lo_login_password"]').val()
        },
        success: function(html)
        {
            if(html == 'USER_LOGGED')
            {
                window.location.replace("/");
            }
        },
        beforeSend: function() {},
        error: function(html)
        {
            console.error(html);
        }
    });
});