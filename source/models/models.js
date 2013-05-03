enyo.ready(function () {
	var ajax = new enyo.Ajax({url: "gallery_manifest.json"});
	ajax.response(this, function(inSender, inResponse) {
		var ws = inResponse.widgets;
		for (var i in ws) {
			var w = ws[i];
			ws[i].owner = inResponse.owners[ws[i].owner];
		}
		app.controllers.cards.add(ws); // adding them in one shot makes any bindings only fire once instead of once for each item
	});
	ajax.go();
});
