$('#lo_register').click(function()
{
    $.ajax( 
    {
        type: "POST",
        url: '/api/user',
        timeout: 1000,
        data:
        {
            email: $('[name="lo_register_email"').val(),
            password: $('[name="lo_register_password"').val()
        },
        success: function(html)
        {
            console.log(html);
        },
        beforeSend: function(){},
        error: function(html)
        {
            console.log(html);
        }
    });
});