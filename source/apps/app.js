enyo.kind({
	name: "enyojs.Gallery.Application",
	kind: "enyo.Application",
	controllers: [{
		name: "message",
		kind: "enyojs.Gallery.MessageController"
	}, {
		name: "messages",
		kind: "enyojs.Gallery.MessagesController"
	}],
	view: "enyojs.Gallery.MainView",
	addRecord: function (sender, event) {
		var data = this.controllers.message.get("data");
		var messages = this.controllers.messages;
		messages.add({message: data});
	}
});
