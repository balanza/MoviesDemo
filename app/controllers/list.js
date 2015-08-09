var args = arguments[0] || {};

if (OS_IOS) {

    $.list.filterAttribute = "name";
} else {
    $.list.filterAttribute = "title";
}


_.defer(function(){

    var net = require('net');
    Alloy.Globals.loading.show();
    net.getMovies(function(movies) {
        Alloy.Globals.loading.hide();
        Alloy.Collections.movieList.reset(movies);
    });
});






function showDetail(e) {
    var detailWin = Alloy.createController("detail", e.index).getView();
    if (OS_IOS) {
         Alloy.Globals.navWin.openWindow(detailWin);
    } else {
        detailWin.open();
    }
}

function transformModel(model) {
    var attrs = model.attributes;
    // attrs.score = attrs.ratings.critics_score;
    // attrs.thumbnail = attrs.posters.thumbnail.replace("_tmb", "_pro");
    return attrs;
}