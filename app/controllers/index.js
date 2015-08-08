

if (OS_IOS) {
    var navWin = Ti.UI.iOS.createNavigationWindow({
        window: $.index
    });
    navWin.open();
    
} else {
    $.index.open();
   
}


Alloy.Globals.loading = $.loading;


/*
setTimeout(function() {
	showDetail({index: 0});
}, 500); */