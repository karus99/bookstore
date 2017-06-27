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