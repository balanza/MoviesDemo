
var args = arguments[0];

var movieDetail = Alloy.Collections.movieList.at(args).toJSON();


$.cscore.color = Alloy.Globals.setColor(movieDetail.score); 



movieDetail.thumbnail.replace("_pro", "_det");
Alloy.Models.currentMovie.set(movieDetail);



function closeWindow() {
  $.detail.close();
}

$.detail.addEventListener("close", function() {
	Alloy.Models.currentMovie.clear();
	$.destroy();
});
