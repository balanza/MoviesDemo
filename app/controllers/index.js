

if (OS_IOS) {
     Alloy.Globals.navWin = Ti.UI.iOS.createNavigationWindow({
        window: $.index
    });
     Alloy.Globals.navWin.open();
    
} else {
    $.index.open();
   
}


Alloy.Globals.loading = $.loading;


/*
setTimeout(function() {
	showDetail({index: 0});
}, 500); */