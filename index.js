//  This is the javascript code that makes the request as well as adds to the table based on the
//  response.  I didn't know what to do if a user made consecutive requests so currently
//  this will simply append the additional set of tasks to what is already in the table.
//  I also assumed that the root name for the json response would always be "items".
//  Didn't account for failed requests.

(function() {
	var table = document.getElementById("table");

	function addRow (data) {
		var rowCount = table.rows.length;
		var newRow = table.insertRow(rowCount);
		var newCell1 = newRow.insertCell(0);
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.checked = data.done;
		newCell1.appendChild(checkbox);
		var newCell2 = newRow.insertCell(1);
		newCell2.innerHTML = data.description;
	}

	document.getElementById("btn").addEventListener("click", function() {
		var xmlHttp;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", document.getElementById("urlInput").value, false);
		xmlHttp.send(null);
		var response = JSON.parse(xmlHttp.responseText);
		for (var i =0; i<response.items.length; i++) {
			addRow(response.items[i]);
		}
	});

}) ();