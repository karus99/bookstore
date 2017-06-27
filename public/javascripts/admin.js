$(document).ready(function() {
	/* GET users/workers list. */
	$.ajax(
	{
		type: "GET",
		url: "/api/user/all",
		success: function(html)
		{
			var users = JSON.parse(html);
			var type = $('#users_table').attr('data-type');
			for(var i in users) 
			{
				if(type == "users" && users[i].type == 3)
				{
					$('#users_table').append('\
			<tr>\
				<td>' + users[i].email + '</td>\
				<td><button type="button" id="lo_add_worker" class="btn btn-sm btn-primary pull-right" data-id="' + users[i].id + '">Dodaj</button><td>\
			<tr>');
				}
				else if(type == "workers" && users[i].type == 2)
				{
					$('#users_table').append('\
			<tr>\
				<td>' + users[i].email + '</td>\
				<td><button type="button" id="lo_del_worker" class="btn btn-sm btn-danger pull-right" data-id="' + users[i].id + '">Usuń</button><td>\
			<tr>');
				}
			}
		},
		error: function(html)
		{
			console.log(html);
		}
	});
});

