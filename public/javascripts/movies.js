document.addEventListener("DOMContentLoaded", function(){
	var btn = document.getElementById('btn');
 	btn.addEventListener("click", function(evt) {
		// Do not submit form, use AJAX INSTEAD!
		evt.preventDefault();

		// TODO: Change to match i6/port number
		var url="http://localhost:3000/ait/api/movies-db";

		var director = document.getElementById('director').value;
		url = url+"?director=" + director;
		var req = new XMLHttpRequest();
		req.open('GET',url,true);

		// Look, ma! No anonymous functions!
		req.addEventListener('load', handleLoad); 
		req.addEventListener('err', handleError);

		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send();

		// DOM Manipulation time!
		function handleLoad(data) {
			if (req.status >= 200 && req.status < 400) {
				var directors = JSON.parse(req.responseText);

				// Remove all unflitered movies
				var ul = document.getElementById("movies-list");
				var moviesList = ul.getElementsByTagName("li");
				while(moviesList.length > 0) {
					console.log("Removing");
					ul.removeChild(moviesList[0]);
				}

				// Add movies with director that's passed in
				var newUl = document.createElement('ul');
				newUl.id = "movies-list";
				document.body.appendChild(newUl);

				directors.forEach(function(movie) {
					var li = document.createElement('li');
					li.textContent=movie.title+"-"+movie.director;
					document.getElementById("movies-list").appendChild(li);
				});
			}
		}
		// Error handling
		function handleError(err) {
			document.body.appendChild(document.createTextNode('Something went wrong... ' + err));
		}
	});
});