enyo.kind({
	name: "enyojs.Gallery.Application",
	kind: enyo.Application,
	controllers: [
		{name: "router", kind: enyo.Router, routes: [
			{handler: "updateView", context: "app", default: true}
		]},
		{name: "state", kind: enyo.Controller},
		{name: "cards", kind: enyo.ArrayController},
	],
	view: "enyojs.Gallery.MainView",
	updateView: function(inPath) {
		switch (inPath) {
			case "test":
				this.$.state.set("view", "detailView");
				break;
			case "/":
			default:
				this.log("SHOW DEFAULT VIEW");
				break;
		}
	}
});
