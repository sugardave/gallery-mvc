enyo.ready(function () {
	
	enyo.kind({
		name: "enyojs.Gallery.MessageController",
		kind: "enyo.Controller",
		data: "Hello World"
	});
	
	enyo.kind({
		name: "enyojs.Gallery.MessagesController",
		kind: "enyo.ArrayController"
	});
	
});
