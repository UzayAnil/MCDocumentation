$(document).ready(function () {
	$.getJSON("assets/documentation/molang/molang_variable.json", function (data) {
		var variable_data = '';
		$.each(data, function (key, value) {
			variable_data += '<tr>';
			variable_data += '<td>' + value.name + '</td>';
			variable_data += '<td>' + value.description + '</td>';
			variable_data += '<td>' + value.info + '</td>';
			variable_data += '</tr>';
		});
		$('#variable_table').append(variable_data);
	});
});