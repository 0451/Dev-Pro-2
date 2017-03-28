var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'js/data.json');
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

			info = JSON.parse(request.responseText);

			var output='';
			for (var i = 0; i <= info.links.length-1; i++) {
			
					output += '<option>' + 
						'<a "' + info.links[i].id +
						'">' + info.links[i].name + '</a>';
						'</option>';
			}
			
			var update = document.getElementById('reason');
			update.innerHTML = output;
			
			
	} //ready
} //event
request.send();