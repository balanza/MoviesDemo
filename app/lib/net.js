
exports.getMovies = function(_callback) {
	var xhr = Ti.Network.createHTTPClient();
//	var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=50&page=1&country=us&apikey=" + Alloy.CFG.apikey;
	var url = "https://api.themoviedb.org/3/discover/movie?api_key=" + Alloy.CFG.apikey;
	xhr.onload = function() {
		var data = JSON.parse(xhr.responseText);
		//migrate from rottetomatoes to themoviedb
		//_callback(data.movies);
		_callback(_(data.results).map(function(e){
			return {
				title: e.original_title,
				score: e.vote_average * 10,
				year: e.release_date.split('-')[0],
				thumbnail: "http://image.tmdb.org/t/p/w500" + e.poster_path
			};
		}));
	};
	xhr.onerror = function(e) {
		Ti.API.info(JSON.stringify(e));
		alert("oh oh! no movies returned from server");
	};
	xhr.open("GET", url);
	xhr.send();
};

