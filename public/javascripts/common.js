$('#lo_register').click(function()
{
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
            console.log(html);
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