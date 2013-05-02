enyo.kind({
	name: "enyojs.Gallery.Application",
	kind: enyo.Application,
	controllers: [
		{name: "router", kind: enyo.Router, routes: [
			{handler: "updateView", context: "app", default: true}
		]},
		{name: "cards", kind: enyo.ArrayController},
	{
		name: "message",
		kind: "enyojs.Gallery.MessageController"
	}, {
		name: "messages",
		kind: "enyojs.Gallery.MessagesController"
	}],
	view: "enyojs.Gallery.MainView",
	create: function() {
		this.inherited(arguments);
		this.log(this.$.router.location());
	},
	addRecord: function (sender, event) {
		this.log(this.$.router.location());
		var data = this.controllers.message.get("data");
		var messages = this.controllers.messages;
		messages.add({message: data});
	},
	updateView: function(inPath) {
		switch (inPath) {
			case "/":
			default:
				this.log("SHOW DEFAULT VIEW");
				break;
		}
	}
});
